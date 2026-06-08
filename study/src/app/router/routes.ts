import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import ContadorPage from "@/modules/samples/pages/ContadorPage.vue";
import CounterPiniaPage from "@/modules/samples/pages/CounterPiniaPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import AppLayout from "@/modules/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [

    {
        path: "/auth",
        component: AuthPage
    },

    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
                component: HomePage
            },

            {
                path: "counter",
                component: ContadorPage
            },

            {
                path: "counter//pinia",
                component: CounterPiniaPage
            }
        ]

    }
]