import {type App } from "vue"
import Layout from "@/layout"
import {  createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes:Array<RouteRecordRaw> =[
  {
    path:'/',
    component:Layout,
    children:[]
  }
]


const router = createRouter({
  routes,
  history:createWebHistory()
})


export function setupRouter(app:App){
  app.use(router)
}


export default router
