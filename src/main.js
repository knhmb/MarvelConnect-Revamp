import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import BaseButton from "./ui/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);

app.use(ElementPlus);
app.mount("#app");
