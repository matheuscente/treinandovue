import type { SearchForAddress } from "@/shared/types/types"
import type { InputConfig } from "./types"

export type SearchInputConfig = InputConfig & {
    field: keyof SearchForAddress 
}