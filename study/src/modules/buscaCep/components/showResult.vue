<template>
        <div v-if="props.error">
            <span>
                {{ props.error }}
            </span>
        </div>
        <div v-else>
            <h2>Resultado da busca</h2>
        <ul>
            <li class="result-list" v-for="(address, index) in props.addresses" :key="index">
                <span v-if="address.logradouro">Rua: {{ address.logradouro }}</span>

                <span v-if="address.localidade">Cidade: {{ address.localidade }}</span>

                <span v-if="address.estado">Estado: {{ address.estado }}</span>

                <span v-if="address.uf">UF: {{ address.uf }}</span>

                <span v-if="address.ddd">DDD: {{ address.ddd }}</span>

                <span v-if="address.cep">CEP: {{ address.cep }}</span>
            </li>
        </ul>
        </div>

</template>

<script setup lang="ts">
import type { Cep } from '../types/cep';

interface Props {
    error?: string,
    addresses?: Cep[]
}

const props = defineProps<Props>()

</script>

<style scoped>
.result-list {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 2rem;
}
</style>