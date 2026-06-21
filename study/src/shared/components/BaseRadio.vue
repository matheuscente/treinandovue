<template>
    <fieldset>
        <legend v-if="props.legend">
            {{ props.legend }}
        </legend>

        <label v-for="option in props.options" :key="option.value">
            <input type="radio" :name="props.name" :value="option.value" v-model="checked">
                

            {{ option.label }}

        </label>
    </fieldset>

</template>

<script setup lang="ts">
import type { RadioConfig } from "@/shared/types/types"

const props = defineProps < RadioConfig > ()

const checked = defineModel<string>()

</script>

<style scoped></style>