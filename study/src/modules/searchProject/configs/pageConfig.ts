import type { RadioConfig } from "@/shared/types/types";
import type { BaseInputProps, TitleProps } from "@/shared/types/types";
import type { BaseSelectProps } from "@/shared/types/types";

export const titleProps = {
    search: "busca de projetos",
    edit: "editar projeto"
}


export const searchProjectInputProps: BaseInputProps = {
    id: "searchProjectName",
    label: "Nome do projeto",
    type: "text",
    placeholder: "nome do projeto"
}

export const editProjectInputProps: BaseInputProps = 
    {
        id: "editProjectName",
        label: "novo nome",
        type: "text",
        placeholder: "novo nome"
    }

export const searchProjectSelectProps: BaseSelectProps = {
    for: "status",
    label: "Satus",
    id: "status",
    options: [
        {
            value: "ativo",
            text: "Ativo"
        },
        {
            value: "pausado",
            text: "Pausado"
        },
        {
            value: "finalizado",
            text: "Finalizado"
        },

        {
            value: "todos",
            text: "Todos"
        },
        {
            value: "concluido",
            text: "Concluido"
        },

        {
            value: "Selecione uma opção",
            text: "Selecione uma opção",
            disable: true
        }
    ]
}

export const radioProps: RadioConfig = {
    name: "editType",
        legend: "tipo de edição",
        options: [
            {
                label: "status",
                value: "status"
            },
            {
                label: "nome",
                value: "nome"
            }
        ]
}

export const editProjectRadioProps: RadioConfig = {
    name: "editType",
        legend: "tipo de edição",
        options: [
            {
                label: "status",
                value: "status"
            },
            {
                label: "nome",
                value: "nome"
            },
            {
                label: "ambos",
                value: "ambos"
            }
        ]
} 