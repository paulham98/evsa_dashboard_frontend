import { createRouter, createWebHistory } from "vue-router";
import Ex_router from "../components/Ex_router"
import Main from "../components/Main"

const routes = [
  { path: "/", component: Main, name: "Main" },
  { path: "/ex_router", component: Ex_router, name: "Ex_router" },
];


const router = createRouter({
  history: createWebHistory(),//2.x대를 설치하시면 작동을 안합니다.
  routes,
});


export default router;
