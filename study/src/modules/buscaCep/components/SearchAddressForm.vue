<template>
        <div>
            <BaseInput v-for="data in inputDataConfig" :key="data.field" v-model="searchForAddress[data.field]"
                v-bind="data"
                :error="props.errors[data.field]" />
        </div>
</template>

<script setup lang="ts">
import type { SearchForAddress } from '@/shared/types/searchForAddress'
import {
    inputDataConfig
} from "../configs/formConfig"
import BaseInput from '@/shared/components/BaseInput.vue'
import type { ErrorType } from '../types/types'

interface Props {
    errors: ErrorType
}

const props = defineProps<Props>()


const searchForAddress = defineModel<SearchForAddress>({
    default: {
        cidade: "", 
        estado: "",
        rua: ""
    }
})
</script>

<style scoped></style>