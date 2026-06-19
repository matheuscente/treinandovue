<template>
    <div>
        <BaseInput v-model="searchForCEP" v-bind="cepInputConfig" :error="props.error.cep!" :screen-state="props.screenState"/>
    </div>

</template>

<script setup lang="ts">
import { cepInputConfig } from "../configs/formConfig"
import BaseInput from '@/shared/components/BaseInput.vue'
import type { ScreenState } from "../types/screenState"


//cria um v-model para passar o valor para o pai valor padrão uma string vazia
const searchForCEP = defineModel<string>({
    default: ""
})

interface Props {
    error: {
        cep?: string
    },

    screenState: ScreenState
}

const props = defineProps<Props>()

</script>

<style scoped></style>