import type { SearchForAddress } from "@/shared/types/types"
import type { BaseInputProps } from "./types"

export type SearchInputConfig = BaseInputProps & {
    field: keyof SearchForAddress 
}