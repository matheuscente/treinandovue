import type { ErrorType, ScreenState } from "@/modules/buscaCep/types/types"

export interface BaseSelectProps {
    for: string,
    label: string,
    id: string,
    error?: string,
    options:{
            value: string,
            text: string,
            disable?: boolean
        }[]
}