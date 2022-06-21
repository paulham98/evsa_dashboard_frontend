import { createRouter, createWebHistory } from "vue-router";
import Ex_router from "../components/ExRouter"
import Main from "../views/Main"
import Evsa_sup_current from "../views/EvsaSupCurrent"
import Evsa_sup_cal from "../views/EvsaSupCal"
import Evsa_apply_guide from "../views/EvsaApplyGuide"
import Sign_in from "../views/Sign_in"
import AdminMain from "../views/AdminMain"
import AdminCarName from "../components/AdminCarName"
import AdminSubsidyCapital from "../components/AdminSubsidyCapital"

const routes = [
  { path: "/", component: Main, name: "Main" },
  { path: "/ex_router", component: Ex_router, name: "Ex_router" },
  { path: "/Evsa_sup_cal", component: Evsa_sup_cal, name: "Evsa_sup_cal" },
  { path: "/Evsa_sup_current", component: Evsa_sup_current, name: "Evsa_sup_current" },
  { path: "/Evsa_apply_guide", component: Evsa_apply_guide, name: "Evsa_apply_guide" },
  { path: "/sign_in", component: Sign_in, name: "Sign_in"},
  { path: "/admin_main", component: AdminMain, name: "AdminMain"},
  { path: "/admin_car_name", component: AdminCarName, name: "AdminCarName"},
  { path: "/admin_subsidy_capital", component: AdminSubsidyCapital, name: "AdminSubsidyCapital"},
];


const router = createRouter({
  history: createWebHistory(),//2.x대를 설치하시면 작동을 안합니다.
  routes,
});


export default router;
