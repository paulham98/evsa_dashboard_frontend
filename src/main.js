import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router"
import VueApexCharts from "vue3-apexcharts";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '../public/css/reset.css'
import '../public/css/style.css'
//import { fetch_api, get_api } from './plugin.js'
import $ from 'jquery'
import mitt from "mitt"

const app = createApp(App);
const emitter = mitt();
app.provide('emitter', emitter);

app.use($);
app.use(Router);
app.use(VueApexCharts);
app.use(BootstrapVue3);
app.mount("#app");
//app.use(fetch_api, get_api);

