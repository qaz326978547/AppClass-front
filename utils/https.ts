import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios'; // 引入类型声明
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();

const apiBaseUrl = computed(() => 'https://appclass-back.zeabur.app/api');
const isLoading = ref(false);
const { token } = storeToRefs(authStore);
const ajax = axios.create({
    baseURL: apiBaseUrl.value,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + token.value || ''
    },
    withCredentials: true,
    timeout: 60000 // 超时设置
});

// 用于客户端请求的封装函数
export async function clientFetch<T = any>(method: AxiosRequestConfig['method'], url: string, data?: any): Promise<T> {
    const response = await ajax.request<T>({
        method,
        url,
        data
    });
    return response.data;
}

export async function $http<T = any>(method: Method, url: string, ...payload: any[]): Promise<T> {
    const requestData: AxiosRequestConfig = { url, method };

    if (method == 'get' || method == 'GET') {
        requestData.params = payload[0];
    } else {
        requestData.data = payload[0];
        requestData.params = payload[1];
    }

    try {
        isLoading.value = true;
        const response = await ajax.request(requestData);
        return response.data;
    } catch (err: any) {
        if (err.response) {
            throw err.response;
        }
        throw err;
    } finally {
        isLoading.value = false;
    }
}

export function asyncDo<T, E = any>(promise: Promise<T>): Promise<[undefined, T] | [E, undefined]> {
    return promise.then<[undefined, T]>((res) => [undefined, res]).catch((err) => [err, undefined]);
}

export function isResponseOK(err: any, result: any) {
    if (err && !result) {
        console.warn(err, result);
        if (err.status == 401) {
            alert('請先登入');
        }
        if (err.status == 403) {
            alert('權限不足');
        }
        if (err.status == 404) {
            alert('找不到資源');
        }
        if (err.status == 500) {
            alert('伺服器錯誤');
        }
        if (err.status == 503) {
            alert('服務暫時無法使用');
        }
        return false;
    }
    return true;
}

