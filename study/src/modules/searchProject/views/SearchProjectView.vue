<template>
    <Title v-if="stateAction === 'search'" :text="titleProps.search" />
    <Title v-else :text="titleProps.edit" />
    <ProjectsForm v-if="stateAction === 'search'" @search="handleSearcheProject"/>

    <EditProjectForm v-if="stateAction === 'edit'" @edit="handleEditProject" />

    <Results v-if="stateAction === 'search'" @delete="handleDeleteProject"
        @editId="handleEditProjectId"
        v-bind="result" />

</template>

<script setup lang="ts">
import Title from '@/shared/components/Title.vue';
import { titleProps} from '../configs/pageConfig.ts';
import ProjectsForm from '../components/ProjectsForm.vue';
import { ref } from 'vue';
import type { EditProjectParams, SearchProjectsParams, SearchResult } from '../types/types.ts';
import Results from '../components/results.vue';
import { projectService } from '../services/projectsService.ts';
import { projects } from '../data.ts';
import EditProjectForm from '../components/editProjectForm.vue';

const result = ref<SearchResult>({
    length: 0,
    projects: []
})

const editId = ref<number>()

const stateAction = ref<"search" | "edit">("search")

    //casos de uso
    // usuario deletou
        const handleDeleteProject = (id: number) => {
            projectService().deleteProject(id)
            result.value = {
                length: projects.value.length,
                projects: projects.value
            }
        }

        //usuario editou

        const handleEditProjectId = (id: number) => {
            stateAction.value = "edit"
            editId.value = id
        }

        const handleEditProject = (data: EditProjectParams) => {
            projectService().editProject(editId.value!, data)
            result.value = {
                length: projects.value.length,
                projects: projects.value
            }
            stateAction.value = "search"
            console.log(stateAction.value)
        }

    //usuario pesquisou
        const handleSearcheProject = (data: SearchProjectsParams) => {
            stateAction.value = "search"
            const itens = projectService().getProjects(data)
            result.value = {
                length: itens.length,
                projects: itens
            }
        }

</script>


<style scoped></style>