<template>

<label :for="props.for"> {{ props.label }}</label>

<select :id="props.id" v-model="value">
    <option v-for="option in props.options" :key="option.value" :value="option.value" :disabled="option.disable" >
        {{ option.text }}
    </option>
</select>

<small v-if="props.error">
    {{ props.error }}
</small>

</template>


<script setup lang="ts">
    import type{ BaseSelectProps } from '../types/baseSelectProps';

    const props = defineProps<BaseSelectProps>()

    const value = defineModel<string>()

</script>
<style scoped></style>