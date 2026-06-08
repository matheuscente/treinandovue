<template>

    <ul>
        <li v-for="person in prop.persons" :key="person.id">
           nome: {{ person.name }} | {{ person.age }} anos
        </li>
    </ul>

</template>

<script setup lang="ts">
import type { Person } from '@/modules/shared/types/person.iterface';
import type { PropType } from 'vue';


    const prop = defineProps({
        persons: {
            required: true,
            type: Array as PropType<Person[]>
        }
    })
</script>