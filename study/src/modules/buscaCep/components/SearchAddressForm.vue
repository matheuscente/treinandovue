<template>
        <div>
            <BaseInput v-for="data in inputDataConfig" :key="data.field" v-model="searchForAddress[data.field]"
                v-bind="data" />
        </div>
</template>

<script setup lang="ts">
import type { SearchForAddress } from '@/shared/types/searchForAddress'
import {
    inputDataConfig
} from "../configs/formConfig"
import BaseInput from '@/shared/components/BaseInput.vue'


const searchForAddress = defineModel<SearchForAddress>({
    default: {
        cidade: "", 
        estado: "",
        rua: ""
    }
})
</script>

<style scoped></style>