<template>
    <div>
        <h1>abaixo temos o primeiro slot - componente de slot</h1>
        <slot name="first"></slot>
    </div>

    <main>
        <h3>abaixo temos o slot padrão - componente de slot</h3>
        <slot></slot>

        <div>
            <h3>abaixo, temos um objeto de usuarios passado por slot props - componente de slot</h3>
            <slot name="persons" :persons="persons"></slot>
        </div>
    </main>

    <div>
        <h3>este é o slot segundo - componente de slot</h3>
        <slot name="second"></slot>
    </div>

</template>

<script setup lang="ts">
    import type { Person } from '../..//modules/person/types/person';

    const persons: Person[] = [
        {
            id: 1,
            name: 'vicente',
            age: 24
        },

        {
            id: 2,
            name: 'ketlyn',
            age: 27
        },

        {
            id: 3,
            name: 'irene',
            age: 64
        },
    ]
</script>