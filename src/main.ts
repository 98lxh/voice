import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";

import "./styles/index.scss";
import "uno.css";
import { setupRouter } from "./router";

async function bootstarp() {
  const app = createApp(App);

  //状态管理
  setupStore(app);
  
  //路由
  setupRouter(app)

  app.mount("#app");
}

void bootstarp();
