import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router"
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(Router);
app.mount("#app");
app.use(VueApexCharts);

