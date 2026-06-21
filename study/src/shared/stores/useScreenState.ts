import type { ScreenState } from "@/modules/buscaCep/types/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useScreenStateStore = defineStore('screenState', () => {

    const screenState = ref<ScreenState>("idle")

    const setState = (state: ScreenState) => {
        screenState.value = state
    }

    return {
        setState,
        screenState
    }
})


