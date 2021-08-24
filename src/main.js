import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import {router} from './router/index'
import axios from "./api/axios";

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router)
app.use(ElementPlus)
app.mount('#app')
