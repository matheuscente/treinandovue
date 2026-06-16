<template>

    <div class="form-button-conteiner">
        <BaseButton type="submit">
            PESQUISAR
        </BaseButton>
        <BaseButton @click="btnBack" type="button">
            VOLTAR
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import  BaseButton from "@/shared/components/BaseButton.vue"

const btnBack = () => {
    router.back()
}

</script>

<style scoped >
    .form-button-conteiner {
        display: flex;
        gap: 2rem;
    }

</style>