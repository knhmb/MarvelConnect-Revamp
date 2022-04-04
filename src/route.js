import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Services from "./pages/Services.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Media from "./pages/Media.vue";

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
    { path: "/about-us", component: About },
    { path: "/contact", component: Contact },
    { path: "/media", component: Media },
  ],
});

export default router;
