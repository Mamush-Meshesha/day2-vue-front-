import { createRouter, createWebHistory } from "vue-router";
import Subscribing from "../views/Subscribing.vue";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/subscribing",
      name: "subscribing",
      component: Subscribing,
    },
  ],
});

export default router;
