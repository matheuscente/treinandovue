<script setup lang="ts">

    interface MenuItemProps {
        label: string,
        to: string
    }

    const props = defineProps<MenuItemProps>()

</script>


<template>
    <li> <RouterLink :to="props.to"> {{ props.label }} </RouterLink> </li>
</template>