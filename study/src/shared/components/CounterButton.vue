<template>
    <button @click="defineAction"> {{ props.label }}</button>
</template>

<script setup lang="ts">


    interface btnProps {
        label: string
    }

    const props = defineProps<btnProps>()

    const emit = defineEmits<{
        action: [],

    }>()

    const defineAction = () => {
        emit("action")
    }
</script>