import type z from "zod"
import { searchSchema } from "../schemas/searchForm.schema"

export type SearchData = z.infer<typeof searchSchema>