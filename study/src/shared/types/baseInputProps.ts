import type { ErrorType } from "@/modules/buscaCep/types/errorType";
import type { ScreenState } from "@/modules/buscaCep/types/screenState";

export interface BaseInputProps {
    id: string,
    label: string,
    type: string,
    placeholder: string,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    error?: ErrorType | string,
    field: string,
    screenState: ScreenState
}