import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../types/user";

export const useAuthStore = defineStore('auth', () => {

    const isLoading = ref(false)
    const user = ref<User | null> ()
    const isAuth = computed(() => !!user.value)

    const simulateAPI = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    const login = async (username: string, password: string) => {

        try {
            isLoading.value = true
            await simulateAPI()
            user.value = {
                id: 1,
                username: "vicente"
            }
        } finally {
            isLoading.value = false
        }

    }

    const logout = async () => {
        try {
            isLoading.value = true
            await simulateAPI()
            user.value = null
        } finally {
            isLoading.value = false
        }
    }

    return {
        user,
        isLoading,
        isAuth,
        login,
        logout
    }
})