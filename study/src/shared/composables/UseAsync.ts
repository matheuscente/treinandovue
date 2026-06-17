import { ref } from "vue"
import { NotFoundError } from "../utils/not-found.error"

//essa função executa uma função que retorna uma promessa generica
//T é o valor do retorno, P é o valor do parametro passado
export const useAsync = <T, P>(fn: (param: P) => Promise<T>) => {

    const data = ref<T | null>(null)
    const loading = ref(false)
    const error = ref<string | null>()

    //função que executa a função passada por parametro
    async function execute(param: P) {
        loading.value = true
        error.value = null
        data.value = null

        try {
            data.value = await fn(param) //fn é a função passada por parametro
        } catch(e) {
            error.value = e instanceof NotFoundError ? e.message : "Erro de requisição"
        } finally {
            loading.value = false
        }
    }

    return {
        data,
        loading,
        error,
        execute
    }
}