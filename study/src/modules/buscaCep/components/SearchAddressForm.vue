<template>
        <div>
            <BaseInput @submit="search" v-for="data in inputDataConfig" :key="data.field" v-model="searchForAddress[data.field]"
                v-bind="data" />
        </div>
</template>

<script setup lang="ts">
import type { SearchForAddress } from '@/shared/types/searchForAddress'
import { reactive } from 'vue'
import {
    inputDataConfig
} from "../configs/formConfig"
import BaseInput from '@/shared/components/BaseInput.vue'

const emit = defineEmits<{
    "search": [data: SearchForAddress]
}>()


const search = () => {
    emit("search", searchForAddress)
}

const searchForAddress = reactive<SearchForAddress>({
    rua: '',
    cidade: '',
    estado: ''
})
</script>

<style scoped></style>