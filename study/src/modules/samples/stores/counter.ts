import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
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

    return { count, triple, increment, decrement, reset }
})