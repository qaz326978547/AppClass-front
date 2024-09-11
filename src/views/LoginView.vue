<template>
    <div class="container flex justify-center">
        <div class="w-full rounded-md border bg-white px-6 py-4 md:w-[80%] lg:w-[50%]">
            <p class="text-center text-3xl font-bold text-primary">登入</p>
            <div class="my-[40px] flex items-center justify-center">
                <iconify-icon
                    class="me-6 rounded-full bg-[#f04141] p-3 md:h-[60px] md:w-[60px]"
                    icon="akar-icons:google-fill"
                    width="48"
                    height="48"
                    style="color: white"
                    @click="thirdPartyRegister('google')"
                >
                </iconify-icon>
                <iconify-icon
                    class="rounded-full bg-[#00c300] p-3 md:h-[60px] md:w-[60px]"
                    icon="ri:line-fill"
                    width="48"
                    height="48"
                    style="color: white"
                    @click="thirdPartyRegister('line')"
                >
                </iconify-icon>
            </div>
            <div class="my-[30px] flex items-center justify-center accent-primary">
                <input class="me-4 h-[20px] w-[20px]" type="checkbox" id="isAgree" />
                <label for="isAgree">
                    我同意
                    <a href="#" class="text-primary">使用條款</a>
                    和
                    <a href="#" class="text-primary">隱私政策</a>
                    中所列的所有條件和規定
                </label>
            </div>
            <div class="flex items-center">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500">or</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <form class="p-4">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700"
                        >電子郵件<span class="text-red-500">*</span></label
                    >
                    <input type="email" id="email" class="mt-1 block w-full border-b-2 border-primary p-2 sm:text-sm" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700"
                        >密碼<span class="text-red-500">*</span></label
                    >
                    <input
                        type="password"
                        id="password"
                        class="mt-1 block w-full border-b-2 border-primary p-2 sm:text-sm"
                    />
                </div>
                <a class="flex justify-end text-primary" href="#">重新設定密碼</a>
                <div class="mt-[40px]">
                    <button type="submit" class="btn w-full bg-primary p-2 text-center">登入</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { AuthApi } from '~/base/api/auth';
const thirdPartyRegister = async (thirdParty: 'line' | 'google') => {
    try {
        // 從後端獲取第三方登入的 URL 並跳轉
        window.location.href = `https://appclass-back.zeabur.app/api/auth/${thirdParty}/redirect`;
    } catch (error) {
        console.error('授權錯誤: ', error);
    }
};
</script>

<style>
.text {
    color: #f5deb3;
    background: #ffe4e1;
    border: 1px solid #c4a484;
}

.btnssss {
    color: #4b3c2f;
    background: #704214;
    border: 1px solid #8b4513;
}
</style>

