<template>
    <div>
        <Title
        text="this is my counter"
                subtitle="please, test it!">
            </Title>

        <div class="counter-content">
            <span>{{ count }}</span>
            <span>triplo: {{ triple }}</span>
            <span>Pinia: {{ pinia.count }}</span>
        </div>

        <div class="buttons">
            <CounterButton label="+" @action="increment">
                
            </CounterButton>

            <CounterButton label="-" @action="decrement">
                
            </CounterButton>

            <CounterButton label="reset" @action="reset">
                
            </CounterButton>
        </div>

    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
import Title from '../../../shared/components/Title.vue';
import { useCounterStore } from '../stores/counter.ts';
import CounterButton from '@/shared/components/CounterButton.vue';

    const pinia = useCounterStore()

    const count = ref(0)

    const triple = computed(() => {
        return count.value * 3
    })

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    const reset = () => {
        count.value = 0
    }

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