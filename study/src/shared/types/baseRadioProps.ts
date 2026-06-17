import type { Option } from "@/shared/types/types"

export interface BaseRadioProps {
    name: string,
    legend?: string,
    options: Option[]
}