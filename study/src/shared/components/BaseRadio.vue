<template>
    <fieldset>
        <legend v-if="props.legend">
            {{ props.legend }}
        </legend>

        <label v-for="option in props.options" :key="option.value">
            <input type="radio" :name="props.name" :value="option.value" :checked="modelValue === option.value"
                @change="handleChange(option.value)">

            {{ option.label }}

        </label>
    </fieldset>

</template>

<script setup lang="ts">
import type { BaseRadioProps } from "@/shared/types/types"

const props = defineProps < BaseRadioProps > ()

//define o evento
const emit = defineEmits < {
    //o evento do tipo update:modelValue que passa para o pai o valor selecionado 
    "update:modelValue": [value: string]
} > ()


//função que captura modificação de seleção. é executada toda vez que o input radio é clicado e emite o evento de update:modelValue
const handleChange = (value: string) => {
    emit("update:modelValue", value)
}
</script>

<style scoped></style>