import type { Option } from "@/shared/types/types"

export interface BaseRadioProps {
    modelValue: string,
    name: string,
    legend?: string,
    options: Option[]
}