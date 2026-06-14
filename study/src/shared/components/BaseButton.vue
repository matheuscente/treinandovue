<template>
    <button @click="defineAction" 
            :type="props.type ?? 'button'"
            :disabled="props.disabled">
             <slot></slot>
            </button>
</template>

<script setup lang="ts">


    interface btnProps {
        type?: "submit" | "button" | "reset",
        disabled?: boolean
    }

    const props = defineProps<btnProps>()

    const emit = defineEmits<{
        action: [],

    }>()

    const defineAction = () => {
        emit("action")
    }
</script>