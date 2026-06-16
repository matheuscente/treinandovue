import { searchWithAddressService, searchWithCepService } from '../services/searchService'
import type { Cep, SearchData } from '../types/types'
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

  //se cepAsync ou addressAsync estiverem carregando, retorna TRUE
  const loading = computed(() => cepAsync.loading.value || addressAsync.loading.value)

  //se der algum erro na consulta dos dados, retorna erro, senão null
  const error = computed(() => cepAsync.error.value ?? addressAsync.error.value)

  //mapeia o retorno dos dados da busca por cep
  const cepData = computed(() => cepAsync.data.value ? mapCep(cepAsync.data.value) : null)

  //mapeia o retorno dos dados da busca por endereço
  const addressData = computed(() => addressAsync.data.value ? addressAsync.data.value.map(mapCep) : [])

  const search = async (data: SearchData) => {
    if(data.searchType === "C") {
      await cepAsync.execute(data.data)
    } else {
        await addressAsync.execute(data.data)
    }

  }

  return {

    cepData,

    addressData,

    loading,

    error,

    search

  }
}
