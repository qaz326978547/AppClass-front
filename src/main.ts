import './assets/css/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('IconifyIcon', Icon);
app.mount('#app');

