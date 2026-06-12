<template>
    <h1>este é um teste de slot - componente pai</h1>
    <Slot>
    <template #first>
        <div class="background-slot">
            <p >este é o primeiro slot - passado pelo pai</p>
        </div>
        
    </template>

    <div class="background-slot">
        <h3> este é o slot padrão -  passado pelo pai</h3>
    </div>

     <template #persons="{ persons }">
            <ul class="background-slot">
                <li v-for="person in persons" :key="person.id">
                    <div class="list-item">
                        <span>id: {{ person.id }}</span>
                        <span>nome: {{ person.name }}</span>
                        <span>idade: {{ person.age }}</span>
                        <span> - passado pelo pai</span>
                    </div>
                </li>
            </ul>
        </template>

    <template #second>
        <div class="background-slot">
            <h3>este é o segundo slot, nomeado como segundo -  passado pelo pai</h3>
        </div>
    </template>
    
    </Slot>
    
</template>

<script setup lang="ts">
import Slot from '@/shared/components/Slot.vue';
</script>

<style scoped>
    .background-slot {
        background-color: gray;
    }

    .list-item {
        max-width: 600px;
        display: flex;
        gap: 2rem;
        justify-content: space-between;
    }

    .list-item span {
        flex: 1;
        text-align: start;
        display: inline-block;
    }
</style>