<template>
    <div>
        <BaseInput v-model="searchForCEP" v-bind="cepInputConfig" :error="props.error.cep"/>
    </div>

</template>

<script setup lang="ts">
import { cepInputConfig } from "../configs/formConfig"
import BaseInput from '@/shared/components/BaseInput.vue'

//cria um v-model para passar o valor para o pai valor padrão uma string vazia
const searchForCEP = defineModel<string>({
    default: ""
})

interface Props {
    error: {
        cep?: string
    }
}

const props = defineProps<Props>()

</script>

<style scoped></style>