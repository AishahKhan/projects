import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Playground from "../views/Playground.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
    },

    {
      path: "/testing",
      name: "testing",
      component: () => import("../components/User.vue"),

    }
  ],
});

export default router;
