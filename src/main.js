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

/*
 저번 프로젝트에선 컴포넌트간 통신 방법으로 eventbus 를 사용했지만
 알아보니 이 방식은 Vue가 공식적인 방법이 아니었습니다. 또한 Vue3에서부터는 $on, $once, $off 를 사용하지 않아
 부득히하게 다른 방법을 찾아보던 도중 mitt라는 외부 라이브러리로 컴포넌트간 통신을 구현한걸 찾았습니다.
 https://zincod.tistory.com/237
 혹시 궁금하시면 저한테 물어보셔도 됩니다.
 */


const app = createApp(App);
const emitter = mitt();
app.provide('emitter', emitter);

app.use($);
app.use(Router);
app.use(VueApexCharts);
app.use(BootstrapVue3);
app.mount("#app");
//app.use(fetch_api, get_api);

