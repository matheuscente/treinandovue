import { z } from "zod"
import { errorMessage } from "./errorMessage"

const status = z.enum([
            "ativo",
            "concluido",
            "pausado",
             "todos"
        ],
        {
            message: "selecione um status válido!"
        }
    )


export const editProjectParamsSchema = z.discriminatedUnion("editType", [
    z.object({
        editType: z.literal("nome"),
        data: z.string().min(3, errorMessage.nome.minLength)
    }),

    z.object({
        editType: z.literal("status"),
        data: status
    }),

    z.object({
        editType: z.literal("ambos"),
        data: z.object({
            nome: z.string().min(3, errorMessage.nome.minLength),
            status: status
        })
    })
])