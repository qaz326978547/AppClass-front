<template>
    <div>這裡是會員頁面</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AuthApi } from '~/base/api/auth';

const getToken = async () => {
    try {
        const token = await AuthApi.getToken();
        console.log('token: ', token);
    } catch (error) {
        console.error('獲取 token 失敗: ', error);
    }
};

onMounted(() => {
    getToken();
});
</script>

