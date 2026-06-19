import { ref } from 'vue'
import { searchWithAddressService, searchWithCepService } from '../services/searchService'
import type { Cep, SearchData, SearchType } from '../types/types'
import { useAsync } from '@/shared/composables/UseAsync'
import { computed } from 'vue'

export const useBuscaCep = () => {

  const mapCep = (address: Cep): Cep => {
    return {
      localidade: address.localidade,
      logradouro: address.logradouro,
      estado: address.estado,
      uf: address.uf,
      ddd: address.ddd,
      cep: address.cep
    }
  }

  const cepAsync = useAsync(searchWithCepService)
  const addressAsync = useAsync(searchWithAddressService)

    //guarda o tipo da busca atual
  const currentSearchType = ref<SearchType>("C")
  const loading = computed(() => currentSearchType.value === "C" ? cepAsync.loading.value : addressAsync.loading.value)

  const error = computed(() => currentSearchType.value === "C" ? cepAsync.error.value : addressAsync.error.value)

  const clearErrors = () => {
    cepAsync.error.value = null
    addressAsync.error.value = null
  }

  const returnData = computed(() => {
    if(currentSearchType.value === "C") return cepAsync.data.value ? [mapCep(cepAsync.data.value)] : []
    return addressAsync.data.value ? addressAsync.data.value.map(mapCep) : []
  })

  const search = async (data: SearchData) => {
    //define tipo da busca atual, para sempre usar os dados atualizados
    currentSearchType.value = data.searchType

    if(data.searchType === "C") {
      await cepAsync.execute(data.data.cep)
    } else {
        await addressAsync.execute(data.data)
    }

  }

  return {

    returnData,

    loading,

    error,

    clearErrors,

    search

  }
}
