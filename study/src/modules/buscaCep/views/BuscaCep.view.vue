<template>
    <div>
        <SearchForm @search="handleSearch"/>
    </div>

    <Loading v-if="loading" />
    <ShowResult v-else-if="error" :is-loading="loading" :error="error" />
    <ShowResult v-else-if="addressData.length > 0" :addresses=addressData :is-loading="loading" />
    <ShowResult v-else-if="cepData" :addresses=cepDataArray :is-loading="loading" />

</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import SearchForm from '../components/searchForm.vue';
import ShowResult from '../components/showResult.vue';
import { useBuscaCep } from '../composables/useBuscaCep.ts';
import type { SearchData } from '../types/searchData.ts';
import Loading from '@/shared/components/Loading.vue';
import { l } from 'vue-router/dist/index-BQLwgiyK.js';

const {
    loading,
    error,
    cepData,
    addressData,
    searchWithCep,
    searchWithAddress
} = useBuscaCep()

const cepDataArray = computed(() => {
    return cepData.value ? [ cepData.value ] : []
})

const handleSearch = async (data: SearchData) => {
    if (data.searchType === "C") {
       await searchWithCep(data.data)
       
    } else {
        await searchWithAddress(data.data)
    }
    
}
</script>

<style scoped></style>