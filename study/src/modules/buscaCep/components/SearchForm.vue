<template>
    <form @submit.prevent="handleSubmit">
        <BaseRadio v-model="searchType" v-bind="radioDataConfig" @change="emit('change')"/>
        <SearchCepForm v-if="searchType === 'C'" v-model="cep" :error="errors" :screen-state="props.screenState" />
        <SearchAddressForm v-else v-model="address" :errors="errors" :screen-state="props.screenState" />
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
import type { ScreenState, SearchType } from '../types/types.ts';
import { useSearchDataValidation } from '../composables/useSearchDataValidation.ts';

const {
    errors,
    validate
} = useSearchDataValidation()

const searchType = ref<SearchType>("C")
    const props = defineProps<{
    screenState: ScreenState
}>()



const cep = ref("")

const address = ref<SearchForAddress>({
    cidade: "",
    estado: "",
    rua: ""
})

const emit = defineEmits<{
    "search": [data: SearchData],
    "inputValidationError": [data: string],
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
        emit("inputValidationError", "inputError")
        return
    } else {
        emit("search", validatedData)
    }

}
</script>

<style scoped></style>