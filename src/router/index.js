import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home";
import Analytics from "@/pages/Analytics";

Vue.use(Router)

export default new Router({
    mode: "history",

    routes: [
        {
            path: "*",
            redirect: "/"
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/analytics",
            name: "analytics",
            component: Analytics
        }
    ]
})
