<template>
    <HeaderNavbar />
    <div class="pb-[120px] pt-[80px]">
        <RouterView />
    </div>
    <FooterNavBar />
    <div class="absolute inset-0 -z-10 bg-main-bg bg-cover bg-center bg-no-repeat opacity-40"></div>
</template>

<script setup lang="ts">
import FooterNavBar from './components/FooterNavBar.vue';
import HeaderNavbar from './components/HeaderNavbar.vue';
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}
</style>

