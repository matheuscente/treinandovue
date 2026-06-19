<template>
    <div>
        <label :for="props.id">
            {{ props.label }}
        </label>
        <input
                :id="props.id"
                :type="props.type"
                :placeholder="props.placeholder"
                v-model="value"
        >
        <small v-if="props.screenState === 'validationError'">{{ props.error }}</small>
    </div>

</template>

<script setup lang="ts">
import type { BaseInputProps } from '../types/types';


    const props = defineProps<BaseInputProps>()

    const value = defineModel<string>()

</script>

<style scoped></style>