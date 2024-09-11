import './assets/css/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';
import Swal from 'sweetalert2';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$swal = Swal;
app.use(createPinia());
app.use(router);
app.component('IconifyIcon', Icon);
app.mount('#app');

