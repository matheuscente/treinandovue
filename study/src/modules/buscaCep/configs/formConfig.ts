import type { InputConfig, RadioConfig, SearchInputConfig } from '../types/types';

export const radioData: RadioConfig = {
    name: 'searchType',
    legend: "Buscar por",
    options: [
        {
            label: 'cep',
            value: 'C'
        },

        {
            label: 'endereço',
            value: 'E'
        }
    ]
}

export const cepInput: InputConfig = {
    label: "CEP",
    id: "cep",
    type: "text",
    placeholder: "86430000",
    field: "cep"
}

export const inputData: SearchInputConfig[] = [

    {
        label: 'Rua',
        id: 'Rua',
        type: 'text',
        placeholder: 'Rua das Graças',
        field: "rua"
    },

    {
        label: 'Cidade',
        id: 'Cidade',
        type: 'text',
        placeholder: 'Blumenau',
        field: "cidade"
    },

    {
        label: 'Estado',
        id: 'Estado',
        type: 'text',
        placeholder: 'SC',
        field: "estado"
    }
]