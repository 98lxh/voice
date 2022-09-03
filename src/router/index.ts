import { type App } from "vue";
import Layout from "@/layout";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/pages/home/index.vue")
      },
      {
        path: "profile",
        component: () => import("@/pages/profile/index.vue")
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
