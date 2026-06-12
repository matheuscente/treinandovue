<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.ts';
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';

    const authStore = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
        await authStore.logout()
        authStore.user = null
        router.replace({ name: "Auth" })
    }

</script>

<template>
    <header id="header">
        <div>
            <span>Usuário: {{ authStore.user?.username }}</span>
        </div>
        <nav>
            <ul class="header-list">
                <MenuItem to="/" label="home" />
                <MenuItem to="/auth" label="autentication" />
                <MenuItem to="/counter" label="counter" />
                <MenuItem to="/counter/pinia" label=" pinia counter" />
                <MenuItem to="/slot" label="slot test" />
                <li @click="handleLogout"><button>logout</button></li>

            </ul>
        </nav>
    </header>

</template>

<style scoped>

    #header {
        background-color: gray;
        padding: 10px 20px;
        border-radius: 4px;
        min-width: 100vw;
    }

    .header-list {
        list-style: none;
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
</style>