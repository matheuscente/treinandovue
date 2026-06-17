<template>
    <Loading v-if="loading" />
    <SearchForm @search="handleSearch"  />
    <ShowResult :error="error" :addresses="returnData"/>

</template>

<script setup lang="ts">
import Loading from '@/shared/components/Loading.vue';
import SearchForm from '../components/SearchForm.vue';
import { useBuscaCep } from '../composables/useBuscaCep.ts';
import type { SearchData } from '../types/searchData.ts';
import ShowResult from '../components/showResult.vue';

const { error, returnData, loading, search} = useBuscaCep()

const handleSearch =  async (data: SearchData) => {
    await search(data)
}
</script>

<style scoped></style>