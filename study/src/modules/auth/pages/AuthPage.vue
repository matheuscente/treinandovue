<template>
    <Loading v-if="authStore.isLoading" />
    <div v-else class="container">
        <h1>AUTH PAGE</h1>
        <div>
            <button @click="handleLogin">login</button>
        </div>
    </div>

</template>

<style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import Loading from '@/shared/components/Loading.vue';

    const authStore = useAuthStore()
    const router = useRouter()
    const route = useRoute()

    const handleLogin = async () => {
        await authStore.login('user', '123')
        redirect()
    }

    const redirect = async () => {
        const q = route.query.redirect as string
        const r = typeof q === "string" && q.startsWith("/") ? q : "/"
        await router.replace(r)
    }
</script>