<script setup lang="ts">

    interface TitleProps {
        text: string,
        subtitle?: string
    }

    const props = defineProps<TitleProps>()


</script>


<template>

    <div>
        <h1>{{ props.text }}</h1>
        <h2 v-if="props.subtitle"> {{ props.subtitle }}</h2>
    </div>

</template>