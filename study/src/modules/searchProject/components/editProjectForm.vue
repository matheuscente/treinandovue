<template>
    <form @submit.prevent="submit">
        <BaseRadio v-bind="editProjectRadioProps" v-model="editType" />
        <BaseInput v-if="editType === 'nome'" v-bind="editProjectInputProps" v-model="inputName" :error="errors.nome"/>
        <div v-else-if="editType === 'ambos'">
            <BaseInput v-bind="editProjectInputProps" v-model="inputName" :error="errors.nome"/>
            <BaseSelect v-bind="searchProjectSelectProps" v-model="inputStatus" :error="errors.status "/>
        </div>
        <BaseSelect v-else v-bind="searchProjectSelectProps" v-model="inputStatus" :error="errors.status"/>
        <BaseButton type="submit">Salvar</BaseButton>
    </form>
</template>

<script setup lang="ts">
import BaseRadio from '@/shared/components/BaseRadio.vue';
import { editProjectRadioProps, editProjectInputProps, searchProjectSelectProps } from '../configs/pageConfig';
import BaseInput from '@/shared/components/BaseInput.vue';
import { computed, ref, watch } from 'vue';
import type { ProjectStatus } from '../types/projectStatus';
import type { EditProjectParams } from '../types/editProjectParams';
import BaseButton from '@/shared/components/BaseButton.vue';
import BaseSelect from '@/shared/components/BaseSelect.vue';
import type { Project } from '../types/types';
import { useValidation } from '@/shared/composables/useValidation';
import { editProjectParamsSchema } from '../schemas/editProjectParams';

const {
    errors,
    validate
} = useValidation<Project>(editProjectParamsSchema)

const emit = defineEmits<{
    edit: [data: EditProjectParams]
}>()

const formData = computed(() => {
    switch (editType.value) {
        case "nome":
            return {
                editType: editType.value,
                data: {
                    nome: inputName.value
                }
            }

        case "status":

            return {
                editType: editType.value,
                data: {
                    status: inputStatus.value as ProjectStatus
                }
            }

        case "ambos":
            return {
                editType: editType.value,
                data: {
                    nome: inputName.value,
                    status: inputStatus.value as ProjectStatus
                }
            }
    }
})


const editType = ref<"status" | "nome" | "ambos">("status")
const inputName = ref<string>("")
const inputStatus = ref<ProjectStatus | "Selecione uma opção">("Selecione uma opção")

watch(editType, () => {
    errors.value = {}
})


const submit = () => {
    const validatedData = validate(formData.value)
    if(!validatedData) {
        return
    }
    emit("edit", validatedData)

}

</script>

<style scoped></style>