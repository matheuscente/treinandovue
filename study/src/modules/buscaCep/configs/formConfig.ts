import type { BaseInputProps, RadioConfig, SearchInputConfig } from '../types/types';

export const radioDataConfig: RadioConfig = {
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

export const cepInputConfig: BaseInputProps = {
    label: "CEP",
    id: "cep",
    type: "text",
    placeholder: "86430000"
}

export const inputDataConfig: SearchInputConfig[] = [

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