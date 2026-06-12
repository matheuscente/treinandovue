<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.ts';
import Header from '@/shared/components/Header.vue';
import Loading from '@/shared/components/Loading.vue';

const authStore = useAuthStore()
</script>

<template>
    <Loading v-if="authStore.isLoading" />
    <div v-else class="container">
        <Header />
        <div>
            <main>
                <RouterView />
            </main>
        </div>

        <footer>footer</footer>
    </div>

</template>

<style scoped>
    .container {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
</style>