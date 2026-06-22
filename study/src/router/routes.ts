import AuthPage from "@/modules/auth/pages/AuthPage.vue";
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
                component: () => import("@/modules/samples/pages/HomePage.vue"),
                meta: {
                    title: "Homepage"
                }
            },

            {
                name: "Counter",
                path: "counter",
                component: () => import("@/modules/samples/pages/ContadorPage.vue"),
                meta: {
                    title: "Counter"
                }
            },

            {
                name: "Counter Pinia",
                path: "counter/pinia",
                component: () => import("@/modules/samples/pages/CounterPiniaPage.vue"),
                meta: {
                    title: "Pinia counter"
                }
            },

            {
                name: "slot",
                path: "slot",
                component: () => import("@/modules/samples/pages/SlotPage.vue"),
                meta: {
                    title: "Slotpage"
                }
            },

            {
                name: "CEPSearch",
                path: "CEPSearch",
                component: () => import("@/modules/buscaCep/views/BuscaCep.view.vue"),
                meta: {
                    title: "CEP Search"
                }
            },

            {
                name: "ProjectSearch",
                path: "ProjectSearch",
                component: () => import("@/modules/searchProject/views/SearchProjectView.vue"),
                meta: {
                    title: "Project Search"
                }
            }
        ]

    }
]