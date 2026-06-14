import { ref } from 'vue'
import { searchWithAddressService, searchWithCepService } from '../services/searchService'
import type { Cep } from '../types/types'
import type { SearchForAddress } from '@/shared/types/types'

export const useBuscaCep = () => {
  const loading = ref(false)
  const cepData = ref<Cep | null>(null)
  const addressData = ref<Cep[]>([])
  const error = ref<string | null>(null)

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

  const searchWithCep = async (cep: string) => {
    clearState()
    loading.value = true

    try {
      const response = await searchWithCepService(cep)
      if (response.erro) {
        error.value = 'Nenhum endereço encontrado'
        return
      }

      cepData.value = mapCep(response)

    } catch {
      error.value = 'Erro ao consultar CEP'
    } finally {
      loading.value = false
    }
  }

  const searchWithAddress = async (address: SearchForAddress) => {
    clearState()
    loading.value = true

    try {
      const response = await searchWithAddressService(address)
      if (response.length === 0) {
        error.value = 'Nenhum cep encontrado'
      }

      addressData.value = response.map(mapCep)
    } catch {
      error.value = 'Erro ao consultar endreço'
      addressData.value = []
    } finally {
      loading.value = false
    }
  }

  const clearState = () => {
    cepData.value = null
    error.value = null
    addressData.value = []
  }

  return {
    loading,
    cepData,
    addressData,
    error,
    searchWithCep,
    searchWithAddress,
  }
}
