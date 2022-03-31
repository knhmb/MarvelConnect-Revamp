import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Services from "./pages/Services.vue";

const router = createRouter({
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
    { path: "/services", component: Services },
  ],
});

export default router;