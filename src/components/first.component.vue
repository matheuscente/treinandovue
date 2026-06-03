

<script setup lang="ts">

/*
Crie o bloco `<script setup lang="ts">` de um componente `ContadorAvancado.vue` que:
• Tenha um contador numérico iniciando em 0
• Tenha um histórico de operações: um array de objetos com `valor: number` e `operacao:
"incremento" | "decremento" | "reset"`
• Tenha um estado de configuração usando `reactive` com: `passo` (number, padrão 1),
`min` (number, padrão 0), `max` (number, padrão 100)
• Um `computed` chamado `porcentagem` que retorna o percentual do contador em
relação ao max (0 a 100)
• Um `computed` chamado `podeIncrementar` (boolean) que retorna false quando contador
atingir o max
• Um `computed` chamado `podeDecrementar` (boolean) que retorna false quando
contador atingir o min
• Funções: `incrementar()`, `decrementar()` e `resetar()` — que também adicionam ao
histórico
*/


import { ref, reactive, computed } from 'vue'
import type { Entrada } from "../types/index"

 //para valores reativos primitivos, utilizamos ref

 const contador = ref(0) // inicia em 0, number inferido
 const historico  = ref<Entrada[]>([]) //inicia com array vazio,tipo anotado

 //configuração de passo
 const config = reactive({
    passo: 1, min: 0, max:100
 }) //reactve pois estamos reactivos de objetos é reactive


//para valores que precisam ser recalculados automaticamente quando valores reativos mudam, utilizamos computed
const porcentagem = computed(() => {
    Math.round((contador.value / config.max) * 100)
})


//se contador for menor que config.max incrementa, senão decrementa
const podeIncrementar = computed(() => contador.value < config.max)
const podeDecrementar = computed(() => contador.value > config.min)

//função que registra a operação com valor do contador e tipo de operação
const registrar = ((op: Entrada['operacao']) => 
    historico.value.push({valor: contador.value, operacao: op})
)

//função de incremento, decremento e reset
const incrementar = () => {
    if(!podeIncrementar.value) return
    contador.value += config.passo
    registrar('inc')
}

const decrementar = () => {
    if(!podeDecrementar.value) return
    contador.value -= config.passo
    registrar('dec')
}

const reset = () => {
    contador.value = 0
    registrar('res')
}

</script>