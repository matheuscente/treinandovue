import type { ErrorType } from "@/modules/buscaCep/types/errorType";

export interface BaseInputProps {
    id: string,
    label: string,
    type: string,
    placeholder: string,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    error?: ErrorType | string
}