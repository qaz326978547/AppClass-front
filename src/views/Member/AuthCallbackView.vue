<template>
    <div>授權中...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Swal from 'sweetalert2';

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const { setToken } = useAuthStore();
const storeToken = useAuthStore();

onMounted(() => {
    try {
        isLoading.value = true;
        const token = route.query.token;
        const error = route.query.error;
        console.log('query: ', route.query);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: '授權失敗',
                text: error as string,
                confirmButtonColor: 'red'
            }).then(() => {
                router.push('/login');
            });
        }
        if (token) {
            console.log('token: ', storeToken.token);
            setToken(token as string);
            router.push('/member');
        }
    } catch (error) {
        console.error('授權失敗: ', error);
    } finally {
        isLoading.value = false;
    }
});
</script>

