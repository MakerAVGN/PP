import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import CreateTripChoicePage from "@/components/CreateTripChoicePage.vue";
import RoutesPage from "@/components/RoutesPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/create-trip",
    name: "CreateTripChoice",
    component: CreateTripChoicePage,
  },
  {
    path: "/routes",
    name: "Routes",
    component: RoutesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
