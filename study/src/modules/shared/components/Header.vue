<script setup lang="ts">
import MenuItem from './MenuItem.vue';

</script>

<template>
    <header id="header">
        <nav>
            <ul class="header-list">
                <MenuItem to="/" label="home" />
                <MenuItem to="/auth" label="autentication" />
                <MenuItem to="/counter" label="counter" />
                <MenuItem to="/counter/pinia" label=" pinia counter" />
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