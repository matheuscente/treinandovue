import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import BuscaCepView from "@/modules/buscaCep/views/BuscaCep.view.vue";
import ContadorPage from "@/modules/samples/pages/ContadorPage.vue";
import CounterPiniaPage from "@/modules/samples/pages/CounterPiniaPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import SlotPage from "@/modules/samples/pages/SlotPage.vue";
import AppLayout from "@/shared/layouts/AppLayout.vue"
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [

    {
        name: "Auth",
        path: "/auth",
        component: AuthPage,
        meta: {
            title: "Login"
        }
    },

    {
        path: "/",
        component: AppLayout,
        meta: { requiresAuth: true },
        children: [
            {
                name: "Home",
                path: "",
                component: HomePage,
                meta: {
                    title: "Homepage"
                }
            },

            {
                name: "Counter",
                path: "counter",
                component: ContadorPage,
                meta: {
                    title: "Counter"
                }
            },

            {
                name: "Counter Pinia",
                path: "counter/pinia",
                component: CounterPiniaPage,
                meta: {
                    title: "Pinia counter"
                }
            },

            {
                name: "slot",
                path: "slot",
                component: SlotPage,
                meta: {
                    title: "Slotpage"
                }
            },

            {
                name: "CEPSearch",
                path: "CEPSearch",
                component: BuscaCepView,
                meta: {
                    title: "CEP Search"
                }
            }
        ]

    }
]