import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import ContadorPage from "@/modules/samples/pages/ContadorPage.vue";
import CounterPiniaPage from "@/modules/samples/pages/CounterPiniaPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import AppLayout from "@/modules/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [

    {
        name: "Auth",
        path: "/auth",
        component: AuthPage
    },

    {
        path: "/",
        component: AppLayout,
        meta: { requiresAuth: true },
        children: [
            {
                name: "Home",
                path: "",
                component: HomePage
            },

            {
                name: "Counter",
                path: "counter",
                component: ContadorPage
            },

            {
                name: "Counter Pinia",
                path: "counter/pinia",
                component: CounterPiniaPage
            }
        ]

    }
]