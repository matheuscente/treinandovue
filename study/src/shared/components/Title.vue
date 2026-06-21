<script setup lang="ts">
import type { TitleProps } from '../types/types';

 

    const props = defineProps<TitleProps>()
    
    const emit = defineEmits<{
        "titleClick": [msg: string],
        "subClick": [msg: string]
    }>()

    const titleClick = () => {
        emit("titleClick", "clicou no titulo")
    }

    const subClick = () => {
        emit("subClick", "clicou so subtitulo")
    }


</script>


<template>

    <div>
        <h1 @click="titleClick">{{ props.text }}</h1>
        <h2 @click="subClick" v-if="props.subtitle"> {{ props.subtitle }}</h2>
    </div>

</template>