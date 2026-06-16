import { z } from "zod";

const errorMessage = "CEP deve possuir 8 números!"

export const searchWithCepSchema = z.object({
    cep: z.int().min(1, errorMessage).max(8, errorMessage)
})