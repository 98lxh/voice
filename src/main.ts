import App from "./App.vue";
import { createApp } from "vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

import "virtual:svg-icons-register";
import "./styles/index.scss";
import "uno.css";

async function bootstarp() {
  const app = createApp(App);

  //状态管理
  setupStore(app);
  //路由
  setupRouter(app);

  app.mount("#app");
}

void bootstarp();
