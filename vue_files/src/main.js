import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router"
import VueApexCharts from "vue3-apexcharts";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);
app.use(Router);
app.use(VueApexCharts);
app.use(BootstrapVue3)
app.mount("#app");

