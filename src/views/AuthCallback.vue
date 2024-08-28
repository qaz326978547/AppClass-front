<template>
    <div v-if="message">
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <p>正在处理，请稍候...</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const message = ref('');
const route = useRoute();
const router = useRouter();

onMounted(() => {
    const status = route.query.status;
    const messageParam = route.query.message;

    if (status === 'error') {
        message.value = `登录失败！${messageParam}`;
    } else {
        message.value = '登录成功！';
        // 根据实际业务逻辑进行跳转，例如跳转到首页或用户信息页面
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }
});
</script>

