<template>
    <button @click="defineAction" class="btn"
            :type="props.type ?? 'button'"
            :disabled="props.disabled">
             <slot></slot>
            </button>
</template>

<style scoped>
    .btn {
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 10px;
    }
</style>

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