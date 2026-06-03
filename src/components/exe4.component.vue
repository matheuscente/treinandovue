<script setup lang="ts">
import { computed, reactive , ref, watch } from 'vue';
import { Project, Status } from "../types/index"
/*

dado o array de projetos abaixo, implemente um `<script setup lang="ts">` que:
const projetos = [
{ id: 1, nome: 'Sistema de Vendas', status: 'ativo' },
{ id: 2, nome: 'App Mobile', status: 'pausado' },
{ id: 3, nome: 'Portal RH', status: 'ativo' },
{ id: 4, nome: 'Integração API', status: 'concluido' },
]
• Crie um `ref` tipado para a lista de projetos usando a interface `Projeto` do exercício 1
• Crie um `ref` para o termo de busca (string)
• Crie um `ref` para o filtro de status (`StatusProjeto | "todos"`) com valor inicial "todos"
• Crie um `computed` `projetosFiltrados` que filtra por nome (case-insensitive) E por status
simultaneamente
• Use `watch` para exibir no console quantos resultados foram encontrados toda vez que
`projetosFiltrados` mudar
• Crie uma função `limparFiltros()` que reseta busca e status para os valores iniciais

*/

//reactivo com ref pois array é um objeto primitivo
const projetos = ref<Project[]>([
    { id:1, name:'Sistema de Vendas', status:'active', creationDate: new
Date(), ownerId:1 },
{ id:2, name:'App Mobile', status:'paused', creationDate: new Date(),
ownerId:1 },
{ id:3, name:'Portal RH', status:'active', creationDate: new Date(),
ownerId:2 },
{ id:4, name:'Integração API', status:'finished', creationDate: new
Date(), ownerId:2 },
])

//string primitiva
const busca = ref('')

//ref pois é uma string
const filter = ref<Status | 'todos'>('todos')


    //computed pois as verificações dentro da função depende de valores reativos
const projetosFiltrados = computed(() => {
    return projetos.value.filter(p => {
        const matchNome = p.name.toLocaleLowerCase().includes(busca.value.toLocaleLowerCase())

        const matchStatus = filter.value === 'todos' || p.status === filter.value

        return matchNome && matchStatus
    })

})

//observa a função projetosFiltrados sempre que a mesma tem alteração ou é executada
watch(projetosFiltrados, (resultado) => {
    console.log(`${resultado.length} projeto(o)s encontrado(o)s`)
}, { immediate: true } )


//limpa os filtros para os valores iniciais
const limparFiltros = () => {
    busca.value = '',
    filter.value = 'todos'
}
</script>