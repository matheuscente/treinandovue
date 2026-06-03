<script setup lang="ts">
import { Project, Status } from '../types';


/*

Enunciado:
Crie o componente `ProjetoCard.vue` completo (script + template) com as seguintes
especificações:
Props esperadas:
• `projeto`: do tipo `Projeto` (obrigatório)
• `selecionado`: boolean (opcional, padrão false)
• `compacto`: boolean (opcional, padrão false)
• `corStatus`: um objeto `Record<StatusProjeto, string>` opcional com cores CSS para
cada status — padrão `{ ativo: "green", pausado: "orange", concluido: "blue" }`
Vue 3 + TypeScript — Caderno de Exercícios com Gabarito
Página 5 Vue 3 + TypeScript
Emits esperados:
• `selecionar`: emite o objeto `Projeto` completo
• `editar`: emite o `id` do projeto (number)
• `excluir`: emite o `id` do projeto (number) — payload deve incluir também um `confirmado:
boolean`
Template deve exibir:
• Nome do projeto com destaque se `selecionado` for true
• Badge de status com a cor do `corStatus` correspondente
• Descrição apenas se `compacto` for false e se existir descrição
• Um slot nomeado `acoes` no rodapé
• Botões de editar e excluir que disparam os emits corretos

*/

interface Props {
    projeto: Project
    selecionado?: boolean
    compacto?: boolean
    corStatus?: Record<Status, string>
}

const props = withDefaults(defineProps<Props>(), {
    selecionado: false,
    compacto: false,
    corStatus: () => ({active: 'green', paused: 'orange', finished:'blue'})
})

const emit = defineEmits<{
    selecionar: [projeto: Project]
    editar: [id: number]
    excluir: [payload: {id: number, confirmado: boolean}]
}>()


</script>

<template>
<div :class="{ selecionado }" @click="emit('selecionar', projeto)">
<h3 :class="{ 'font-bold': selecionado }">{{ projeto.name }}</h3>
<span :style="{ color:
corStatus[projeto.status] }">{{ projeto.status }}</span>
<p v-if="!compacto && projeto.description">{{ projeto.description }}</p>
<div class="acoes">
<button @click.stop="emit('editar', projeto.id)">Editar</button>
<button @click.stop="emit('excluir', { id: projeto.id, confirmado:
true })">Excluir</button>
<slot name="acoes" />
</div>
</div>
</template>

