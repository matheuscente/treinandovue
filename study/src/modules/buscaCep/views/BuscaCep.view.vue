<template>
    <Loading v-if="screenState === 'loading'" />
    <SearchForm @search="handleSearch"
                @input-validation-error="handleValidationError"
                :screen-state="screenState"
    />
    <ShowResult v-if="screenState === 'success'" :addresses="returnData" />
    <ShowAPIErrors v-if="screenState === 'requestError'" :error="error" />
</template>

<script setup lang="ts">
import Loading from '@/shared/components/Loading.vue';
import SearchForm from '../components/SearchForm.vue';
import { useBuscaCep } from '../composables/useBuscaCep.ts';
import type { SearchData } from '../types/searchData.ts';
import ShowResult from '../components/showResult.vue';
import ShowAPIErrors from '../components/ShowAPIErrors.vue';
import { useScreenStateStore } from '@/shared/stores/useScreenState.ts';
const { error, returnData, search } = useBuscaCep()
const screenStateStore = useScreenStateStore()
const { setState } = screenStateStore
const { screenState } = screenStateStore

const handleValidationError = () => {
    setState('validationError')
}

const handleSearch = async (data: SearchData) => {

    setState("loading")

        await search(data)

        if (error.value) {
        setState("requestError")
            return
        }

        setState("success")
    
}
</script>

<style scoped></style>