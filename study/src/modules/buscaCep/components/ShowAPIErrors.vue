<template>
    <div v-if="props.error">
            <span>
                {{ props.error }}
            </span>
        </div>
</template>

<script setup lang="ts">

    interface Props {
        error?: string | null | undefined
    }

    const props = defineProps<Props>()
</script>

<style></style>