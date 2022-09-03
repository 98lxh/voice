import App from "./App.vue";
import { createApp } from "vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

import "virtual:svg-icons-register";
import "@unocss/reset/normalize.css";
import "@unocss/reset/tailwind.css";
import "./styles/index.scss";
import "uno.css";

async function bootstarp() {
  const app = createApp(App);
  setupStore(app);
  setupRouter(app);
  app.mount("#app");
}

void bootstarp();
