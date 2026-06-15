import { searchWithAddressService, searchWithCepService } from '../services/searchService'
import type { Cep } from '../types/types'
import type { SearchForAddress } from '@/shared/types/types'
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


  const error = computed(() => cepAsync.error.value ?? addressAsync.error.value)

  const cepData = computed(() => cepAsync.data.value ? mapCep(cepAsync.data.value) : null)

    const addressData = computed(() => {
  
    return addressAsync.data.value ? addressAsync.data.value.map(mapCep) : []
  })

  const searchWithCep = async (cep: string) => {
    await cepAsync.execute(cep)
  }

  const searchWithAddress = async (address: SearchForAddress) => {
    await addressAsync.execute(address)
  }

  return {

    cepData,

    addressData,

    loading,

    error,

    searchWithCep,

    searchWithAddress

}
}
