import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/modules/auth/store/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()

  if(to.name !== "Auth" && to.meta.requiresAuth && !authStore.isAuth) {
    return {name: "Auth", query: { redirect: to.fullPath }}
  }

  if(authStore.isAuth && to.name === "Auth") {
    const redirect = (to.query.redirect as string) ?? { name: "Home" }
    return redirect
  }
})

router.afterEach((to) => {
  document.title = to.meta.title ?? "Vite App"
})

export default router
