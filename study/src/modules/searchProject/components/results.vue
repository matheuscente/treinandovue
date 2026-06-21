<template>
    <div>
        <span>Projetos encontrados: {{ props.length }}</span>
        <div>
            <ul v-if="props.length">
                <li class="result-list-item" v-for="project in props.projects" :key="project.id">
                        <span class="result-item">id: {{ project.id }}</span>
                        <span class="result-item">nome: {{ project.nome }}</span>
                        <span class="result-item">status: {{ project.status }}</span>
                        <BaseButton class="result-item" type="button" @action="handleDelete(project.id)">excluir</BaseButton>
                        <BaseButton class="result-item" type="button" @action="handleEdit(project.id)">editar</BaseButton>
                </li>
            </ul>

            <div v-else>
                <span>nenhum resultado encontrado</span>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import BaseButton from '@/shared/components/BaseButton.vue';
import type { SearchResult } from '../types/searchResult';

    const props = defineProps<SearchResult>()

        const emit = defineEmits<{
            delete: [id: number],
            editId: [id: number]
        }>()

    const handleDelete = (id: number) => {
        emit("delete", id)
    }

    const handleEdit = (id: number) => {
        emit("editId", id)
    }
</script>

<style scoped>
    .result-list-item {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .result-list-item button {
        height: 40px;
    }

    .result-item {
        flex: 1;
        min-width: 120px;
    }


</style>