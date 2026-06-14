import type { SearchForAddress } from "./searchForAddress";

export interface BaseInputProps {
    id: string,
    label: string,
    modelValue: string,
    type: string,
    placeholder: string,
    disabled?: string,
    readOnly?: boolean,
    required?: boolean,
    error?: string,
    field: string
}