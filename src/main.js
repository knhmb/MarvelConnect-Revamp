import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import BaseButton from "./ui/BaseButton.vue";
import BaseContainer from "./ui/BaseContainer.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);

app.use(ElementPlus);
app.mount("#app");
