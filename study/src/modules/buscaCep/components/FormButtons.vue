<template>

    <div class="form-button-conteiner">
        <BaseButton type="submit">
            PESQUISAR
        </BaseButton>
        <BaseButton @click="back" type="button">
            VOLTAR
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import  BaseButton from "@/shared/components/BaseButton.vue"

const back = () => {
    router.back()
}

</script>

<style scoped >
    .form-button-conteiner {
        display: flex;
        gap: 2rem;
    }

</style>