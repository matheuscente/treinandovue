import type { CepApiResponse, SearchForAddress } from "@/shared/types/types";
import http from "@/shared/services/http"
import { NotFoundError } from "@/shared/utils/not-found.error";

const searchWithCepService = async (cep: string): Promise<CepApiResponse> => {
        const response = await http.get(`/${cep}/json`)
        if(response.data.erro) throw new NotFoundError("Nenhum endereço para esse CEP")
        return response.data as CepApiResponse

}

const searchWithAddressService = async (address: SearchForAddress): Promise<CepApiResponse[]> => {
    const response = await http.get(`/${address.estado}/${address.cidade}/${address.rua}/json`)
    
    if (response.data.length === 0) throw new NotFoundError("nenhum CEP para esse endereço") 
    return response.data as CepApiResponse[]
}

export {
    searchWithAddressService,
    searchWithCepService
}