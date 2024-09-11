import { createApp } from "vue";
import  "./index.css"
import App from "./App.vue";
import request from "@/utils/request.ts"
import router from "@/router/index.ts"
import pinia from "@/store/index.ts"


const app = createApp(App)
app.use(pinia).use(router)
app.provide('$axios',request)
app.mount("#app");
