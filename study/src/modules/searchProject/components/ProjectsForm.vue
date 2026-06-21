<template>
    <form @submit.prevent="">
        <BaseInput v-bind="searchProjectInputProps" v-model="busca" />
        <BaseSelect v-bind="searchProjectSelectProps" v-model="projectStatus" />
        <BaseButton type="button" @action="reset">
            resetar
        </BaseButton>
    </form>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/components/BaseInput.vue';
import { searchProjectInputProps, searchProjectSelectProps } from '../configs/pageConfig';
import BaseSelect from '@/shared/components/BaseSelect.vue';
import { ref, watch, } from 'vue';
import type { ProjectStatus, SearchProjectsParams } from '../types/types';
import BaseButton from '@/shared/components/BaseButton.vue';


const busca = ref<string>("")
const projectStatus = ref<ProjectStatus | "Selecione uma opção">("Selecione uma opção")

const emit = defineEmits<{
    (e: 'search', data: SearchProjectsParams): void
}>()



watch([busca, projectStatus], () => {
    if (projectStatus.value !== "Selecione uma opção") {
        emit("search", {
            nome: busca.value,
            projectStatus: projectStatus.value
        })
    }
})

const reset = () => {
    busca.value = ""
    projectStatus.value = "todos"
}

</script>


<style scoped></style>