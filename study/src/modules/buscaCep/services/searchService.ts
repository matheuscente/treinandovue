import type { CepApiResponse, SearchForAddress } from "@/shared/types/types";
import http from "@/shared/services/http"
import type { Cep } from "../types/cep";

const searchWithCepService = async (cep: string): Promise<CepApiResponse> => {
    return (await http.get(`/${cep}/json`)).data
}

const searchWithAddressService = async (address: SearchForAddress): Promise<Cep[]> => {
    return (await http.get(`/${address.estado}/${address.cidade}/${address.rua}/json`)).data
}

export {
    searchWithAddressService,
    searchWithCepService
}