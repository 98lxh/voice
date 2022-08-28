import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";

import UselessUi from "useless-ui";
import "useless-ui/dist/theme-chalk/index.css";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(UselessUi);
app.mount("#app");
