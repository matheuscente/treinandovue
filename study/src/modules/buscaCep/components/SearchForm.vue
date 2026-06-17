<template>
    <form @submit.prevent="handleSubmit">
        <BaseRadio v-model="searchType" v-bind="radioDataConfig" />
        <SearchCepForm v-if="searchType === 'C'" v-model="cep" />
        <SearchAddressForm v-else v-model="address" />
        <FormButtons />
    </form>
</template>

<script setup lang="ts">

import SearchCepForm from './SearchCepForm.vue'
import SearchAddressForm from './SearchAddressForm.vue'
import { radioDataConfig } from '../configs/formConfig.ts';
import { ref } from 'vue';
import BaseRadio from '@/shared/components/BaseRadio.vue';
import type { SearchForAddress } from '@/shared/types/searchForAddress.ts';
import FormButtons from './FormButtons.vue';
import type { SearchData } from '../types/searchData.ts';
import type { SearchType } from '../types/types.ts';



const searchType = ref<SearchType>("C")

const cep = ref("")

const address = ref<SearchForAddress>({
    cidade: "",
    estado: "",
    rua: ""
})

const emit = defineEmits<{
    "search": [data: SearchData]
}>()
const handleSubmit = () => {
    if(searchType.value === "C") emit("search", {searchType: "C", data: cep.value})
    else emit("search", {searchType: "E", data: address.value})
}



</script>

<style scoped></style>