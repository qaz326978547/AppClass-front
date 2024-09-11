/// <reference types="vite/client" />

declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    // 其他環境變量定義
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

