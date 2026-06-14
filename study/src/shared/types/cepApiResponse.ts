 interface CEP {
    localidade: string,
    estado: string,
    uf: string,
    ddd: string,
    erro: false,
    logradouro: string
    cep: string
}

interface CepError {
    erro: true
}

export type CepApiResponse = CEP | CepError