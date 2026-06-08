<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<template>
    <div class="container">
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