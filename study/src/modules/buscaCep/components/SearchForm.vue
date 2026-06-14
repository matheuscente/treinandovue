<template>
    <form @submit.prevent="searchData">
        <div>
            <BaseRadio v-model="search" v-bind="radioData" />
        </div>
        <div>
            <BaseInput v-if="search === 'C'" v-model="searchForCep" v-bind="cepInput" />

            <BaseInput v-else v-for="data in inputData" :key="data.field" v-model="searchForAddress[data.field]"
                v-bind="data" />
        </div>

        <div>
            <BaseButton type="submit">
                PESQUISAR
            </BaseButton>
            <BaseButton type="button">
                VOLTAR
            </BaseButton>
        </div>


    </form>
</template>

<script setup lang="ts">
import type { SearchForAddress } from '@/shared/types/searchForAddress'
import { ref, reactive } from 'vue'
import {
    radioData,
    cepInput,
    inputData
} from "../configs/formConfig"
import BaseRadio from '@/shared/components/BaseRadio.vue'
import BaseButton from '@/shared/components/BaseButton.vue'
import BaseInput from '@/shared/components/BaseInput.vue'
import type { SearchData } from '../types/searchData'

const emit = defineEmits<{
    "search": [data: SearchData]
}>()

const searchData = () => {
    if(search.value === "E") {
        emit("search", {
            searchType: "E",
            data: searchForAddress
        })
    } else {
        emit("search", {
            searchType: "C",
            data: searchForCep.value
        })
    }
}

const search = ref("C")
const searchForCep = ref("")

const searchForAddress = reactive<SearchForAddress>({
    rua: '',
    cidade: '',
    estado: ''
})

</script>

<style scoped></style>