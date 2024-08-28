<template>
    <footer class="fixed bottom-0 left-0 right-0 border">
        <div class="container">
            <nav class="relative flex w-full items-center justify-center text-primary">
                <router-link class="flex w-1/5 flex-col items-center justify-center py-4" to="/" exact>
                    <iconify-icon icon="ion:home-outline" width="24" height="24" class="mb-1"></iconify-icon>
                    <span class="text-sm">主頁</span>
                </router-link>
                <router-link class="flex w-1/5 flex-col items-center justify-center py-4" to="/about">
                    <iconify-icon icon="solar:letter-linear" width="24" height="24" class="mb-1"></iconify-icon>
                    <span class="text-sm">收件夾</span>
                </router-link>
                <router-link class="flex w-1/5 flex-col items-center justify-center py-4" to="/contact"> </router-link>
                <router-link class="flex w-1/5 flex-col items-center justify-center py-4" to="/login">
                    <iconify-icon icon="tdesign:cart" width="24" height="24" class="mb-1"></iconify-icon>
                    <span class="text-sm">購物車</span>
                </router-link>
                <router-link class="flex w-1/5 flex-col items-center justify-center py-4" to="/404">
                    <iconify-icon icon="bi:person-circle" width="24" height="24" class="mb-1"></iconify-icon>
                    <span class="text-sm">帳戶</span>
                </router-link>
                <router-link
                    class="absolute top-[-20px] flex flex-col items-center justify-center rounded-full bg-primary p-4"
                    to="/about"
                >
                    <iconify-icon icon="uiw:date" width="24" height="24" class="mb-1 text-white"></iconify-icon>
                </router-link>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

