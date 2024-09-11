<template>
    <div>授權中...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const { setToken } = useAuthStore();
const storeToken = useAuthStore();

onMounted(() => {
    try {
        isLoading.value = true;
        const token = route.query.token;
        console.log('query: ', route.query);

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

