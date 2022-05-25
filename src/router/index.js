import { createRouter, createWebHistory } from "vue-router";
import Ex_router from "../components/ExRouter"
import Main from "../views/Main"
import Evsa_sup_current from "../views/EvsaSupCurrent"
import Evsa_sup_cal from "../views/EvsaSupCal"
import Evsa_apply_guide from "../views/EvsaApplyGuide"
import Sign_in from "../views/Sign_in"

const routes = [
  { path: "/", component: Main, name: "Main" },
  { path: "/ex_router", component: Ex_router, name: "Ex_router" },
  { path: "/Evsa_sup_cal", component: Evsa_sup_cal, name: "Evsa_sup_cal" },
  { path: "/Evsa_sup_current", component: Evsa_sup_current, name: "Evsa_sup_current" },
  { path: "/Evsa_apply_guide", component: Evsa_apply_guide, name: "Evsa_apply_guide" },
  { path: "/sign_in", component: Sign_in, name: "Sign_in"},
];


const router = createRouter({
  history: createWebHistory(),//2.x대를 설치하시면 작동을 안합니다.
  routes,
});


export default router;
