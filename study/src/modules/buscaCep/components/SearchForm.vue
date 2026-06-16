<template>
    <form @submit.prevent="handleSearch">
        <BaseRadio v-model="searchType" v-bind="radioDataConfig" />
        <SearchCepForm v-if="searchType === 'C'" v-model="form.data" />
            <SearchAddressForm
        v-else
        v-model="form.data"
    />

    <BaseButton type="submit">ENVIAR</BaseButton>
    </form>
</template>

<script setup lang="ts">

import SearchCepForm from './SearchCepForm.vue'
import SearchAddressForm from './SearchAddressForm.vue'
import { radioDataConfig } from '../configs/formConfig.ts';
import { reactive, ref, type ComputedRef } from 'vue';
import BaseRadio from '@/shared/components/BaseRadio.vue';
import BaseButton from '@/shared/components/BaseButton.vue';


const searchType = ref("C")

const form = reactive({
    data: ""
})

const handleSearch = () => {
    console.log({
        searchType: searchType.value,
        data: form.data})


}



</script>

<style scoped></style>