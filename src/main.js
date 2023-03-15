import { createApp } from "vue";
import App from "./App.vue";
// 配置elementplus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
///  中文
import locale from "element-plus/es/locale/lang/zh-cn";
// 配置axios
import axios from "axios";
import router from "./router";
import service from "./service";
import echarts from "echarts";

const app = createApp(App);
// createApp(App).mount('#app')
app.config.globalProperties.$https = axios;
app.config.globalProperties.service = service;
app.config.globalProperties.$echarts = echarts;
app.use(router).use(ElementPlus, { locale }).mount("#app");
