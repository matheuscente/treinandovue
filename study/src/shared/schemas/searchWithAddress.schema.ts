import { z } from "zod";

const errorMessage = {
    street: {
        min: "O nome da rua deve ter pelo menos 1 caractere",
        max: "O nome da rua deve ter no máximo 50 caracteres"
    },

    city: {
        min: "O nome da cidade deve ter pelo menos 3 caractere",
        max: "O nome da cidade deve ter no máximo 50 caracteres"
    },

    state: {
        length: "O estado deve conter a sigla UF de 2 caracteres"
    }
}

export const searchWithAddressSchema = z.object({
    rua: z.string().min(1, errorMessage.street.min).max(50, errorMessage.street.max),
    cidade: z.string().min(3, errorMessage.city.min).max(50, errorMessage.city.max),
    estado:z.string().length(2, errorMessage.state.length)
})