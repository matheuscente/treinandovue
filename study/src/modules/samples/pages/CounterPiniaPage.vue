

<template>
    <div>
        <Title text="Counter with pinia"
                subtitle="learning transaction state"
        />

        <div class="counter-content">
            <span>{{ counterStore.count }}</span>
            <span>triplo: {{ counterStore.triple }}</span>

            <div class="buttons">
                <button @click="counterStore.increment()">+</button>
                <button @click="counterStore.decrement()">-</button>
                <button @click="counterStore.reset()">reset</button>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
    import Title from '@/modules/shared/components/Title.vue';
import { useCounterStore } from '../stores/counter';

    const counterStore = useCounterStore()
</script>


<style scoped>
        .buttons {
        display: flex;
        gap: 2rem;
        flex: 1;
        text-align: center;
        border-radius: 5px;
    }

    .buttons button {
        cursor: pointer;
        padding: 10px 20px;

    }

    .counter-content {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
</style>