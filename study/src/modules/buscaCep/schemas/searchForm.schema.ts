import { z } from "zod";
import { messages } from "./errorMessages";
export { messages } from "./errorMessages"

export const searchSchema = z.discriminatedUnion("searchType", [
    z.object({
        searchType: z.literal("C"),

        data: z.object({
            cep: z.string().regex(/^\d{8}$/, messages.cep.length)
        }) 
    }),

    z.object({
        searchType: z.literal("E"),

        data: z.object({
            rua: z.string()
                .min(3, messages.address.street.minLength)
                .max(50, messages.address.street.maxLength),

            cidade: z.string()
                .min(3, messages.address.city.minLength)
                .max(50, messages.address.city.maxLength),

            estado: z.string()
                .regex(/^[A-Za-z]{2}$/, messages.address.state.length)
        })
    })
])