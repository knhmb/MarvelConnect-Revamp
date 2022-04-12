import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Services from "./pages/Services.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Media from "./pages/Media.vue";
import WebApp from "./pages/WebApp.vue";
import DigitalMarketing from "./pages/DigitalMarketing.vue";
import Writing from "./pages/Writing.vue";
import AI from "./pages/AI.vue";
import IOT from "./pages/IOT.vue";
import ProjectDetail1 from "./pages/ProjectDetail1.vue";
import ProjectDetail2 from "./pages/ProjectDetail2.vue";
import ProjectDetail3 from "./pages/ProjectDetail3.vue";
import ProjectDetail4 from "./pages/ProjectDetail4.vue";
import ProjectDetail5 from "./pages/ProjectDetail5.vue";

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
    { path: "/home", redirect: "/" },
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
    { path: "/services", component: Services },
    { path: "/about-us", component: About },
    { path: "/contact", component: Contact },
    { path: "/media", component: Media },
    { path: "/web-n-app", component: WebApp },
    { path: "/digital-marketing", component: DigitalMarketing },
    { path: "/writing", component: Writing },
    { path: "/artificial-intelligence", component: AI },
    { path: "/internet-of-things", component: IOT },
    { path: "/project-detail-1", component: ProjectDetail1 },
    { path: "/project-detail-2", component: ProjectDetail2 },
    { path: "/project-detail-3", component: ProjectDetail3 },
    { path: "/project-detail-4", component: ProjectDetail4 },
    { path: "/project-detail-5", component: ProjectDetail5 },
  ],
});

export default router;
