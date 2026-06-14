<template>
    <div>
        <label :for="props.id">
            {{ props.label }}
        </label>
        <input
                :id="props.id"
                :type="props.type"
                :placeholder="props.placeholder"
                :value="props.modelValue"
                @input="handleInput"
                
        >
    </div>

</template>

<script setup lang="ts">
import type { BaseInputProps } from '../types/types';


    const props = defineProps<BaseInputProps>()

    const emit = defineEmits<{
        "update:modelValue": [value: string]
    }>()

    const handleInput = (event: Event) => {
        const input = event.target as HTMLInputElement

        emit("update:modelValue", input.value)
    }
</script>

<style scoped></style>