<template>
    <form @submit.prevent="handleSubmit">
        <BaseRadio v-model="searchType" v-bind="radioDataConfig" />
        <SearchCepForm v-if="searchType === 'C'" v-model="cep" :error="errors.data" />
        <SearchAddressForm v-else v-model="address" :errors="errors" />
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
import { useSearchDataValidation } from '../composables/useSearchDataValidation.ts';

const {
    errors,
    validate
} = useSearchDataValidation()

const searchType = ref<SearchType>("C")

const cep = ref("")

const address = ref<SearchForAddress>({
    cidade: "",
    estado: "",
    rua: ""
})

const emit = defineEmits<{
    "search": [data: SearchData ]
}>()
const handleSubmit = () => {
    const formData = {
        searchType: searchType.value,
        data: searchType.value === "C" ? cep.value : address.value
    }

    const validatedData = validate(formData)

    if(!validatedData) {
        return
    } else {
        emit("search", validatedData)
    }

}
</script>

<style scoped></style>