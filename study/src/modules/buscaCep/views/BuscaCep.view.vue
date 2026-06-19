<template>
    <Loading v-if="screenState === 'loading'" />
    <SearchForm @search="handleSearch"
                @input-validation-error="screenState = 'validationError'"
                @change="screenState = 'idle'"
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
import type { ScreenState } from '../types/types.ts';
import { ref } from 'vue';
import ShowAPIErrors from '../components/ShowAPIErrors.vue';

const { error, returnData, search } = useBuscaCep()

const screenState = ref<ScreenState>("idle")

const handleSearch = async (data: SearchData) => {

    screenState.value = "loading"

        await search(data)

        if (error.value) {
            screenState.value = "requestError"
            return
        }

        screenState.value = "success"
    
}
</script>

<style scoped></style>