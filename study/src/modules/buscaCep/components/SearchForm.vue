<template>
    <form @submit.prevent="handleSubmit">
        <BaseRadio v-model="searchType" v-bind="radioDataConfig" @change="emit('change')"/>
        <SearchCepForm v-if="searchType === 'C'" v-model="cep" :error="errors" />
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
import FormButtons from '@/shared/components/FormButtons.vue';
import type { SearchData } from '../types/searchData.ts';
import type { SearchType } from '../types/types.ts';
import { useValidation } from '@/shared/composables/useValidation.ts';
import { searchSchema } from '../schemas/searchForm.schema.ts';

const {
    errors,
    validate
} = useValidation<{
    rua: string,
    cidade: string,
    estado: string,
    cep: string
}>(searchSchema)

const searchType = ref<SearchType>("C")



const cep = ref("")

const address = ref<SearchForAddress>({
    cidade: "",
    estado: "",
    rua: ""
})

const emit = defineEmits<{
    "search": [data: SearchData],
    "inputValidationError": [],
    "change": []
}>()
const handleSubmit = () => {

    const formData = {
        searchType: searchType.value,
        data: searchType.value === "C" 
        ?
         {
            cep: cep.value
         }
        : 
        address.value
    }

    const validatedData = validate(formData)

    if(!validatedData) {
        emit("inputValidationError")
        return
    } else {
        emit("search", validatedData)
    }

}
</script>

<style scoped></style>