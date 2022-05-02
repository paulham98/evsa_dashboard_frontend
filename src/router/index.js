import { createRouter, createWebHistory } from "vue-router";
import Ex_router from "../components/Ex_router"
import Main from "../views/Main"
import Evsa_sup_current from "../views/Evsa_sup_current"
import Evsa_sup_cal from "../views/Evsa_sup_cal"
import Evsa_apply_guide from "../views/Evsa_apply_guide"

const routes = [
  { path: "/", component: Main, name: "Main" },
  { path: "/ex_router", component: Ex_router, name: "Ex_router" },
  { path: "/Evsa_sup_cal", component: Evsa_sup_cal, name: "Evsa_sup_cal" },
  { path: "/Evsa_sup_current", component: Evsa_sup_current, name: "Evsa_sup_current" },
  { path: "/Evsa_apply_guide", component: Evsa_apply_guide, name: "Evsa_apply_guide" },
];


const router = createRouter({
  history: createWebHistory(),//2.x대를 설치하시면 작동을 안합니다.
  routes,
});


export default router;
