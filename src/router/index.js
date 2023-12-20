// DEFINE OUR ROUTER RULES

import {createRouter, createWebHistory} from "vue-router";
import CalculatorView from "../views/CalculatorView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: 'home',
            component: CalculatorView
        },
        {
            path:"/home",
            redirect: "/"
        },
        {
            path:"/:catchall(.*)*",
            name: 'Not Found',
            component: NotFoundView
        },
    ]
});

export default router;