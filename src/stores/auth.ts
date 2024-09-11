import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const token = ref('');
    const isLogin = computed(() => !!token.value);
    function setToken(newToken: string) {
        token.value = newToken;
        console.log('setToken', newToken);
    }
    function clearToken() {
        token.value = '';
    }
    return { token, isLogin, setToken, clearToken };
});

