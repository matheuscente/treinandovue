import { ref } from "vue";
import { searchSchema } from "../schemas/searchForm.schema";
import type { ZodIssue } from "zod";
import type { ErrorType } from "../types/types";

//tipo de objeto reativo com chave string e valor string

export const useSearchDataValidation = () => {
    const errors = ref<ErrorType>({})

    //função de validação, se conter erro retorna null e atribui os erros para errors, senão retorna os dados do form
    const validate = (data:unknown) => {
        //reseta valor de errors, caso exista
        errors.value = {}

        const result = searchSchema.safeParse(data)
        
        if(!result.success) {
            errors.value = mapErrors(result.error.issues)
            return null
        }

        return result.data
    }

    //recebe um array de issues do zod para mapear os erros
    const mapErrors = (issues: ZodIssue[]): ErrorType => {
        const mappedErrors: ErrorType = {}

        //para cada item do array, 
        issues.forEach(issue => {
            //atrbui, para cada issue, a chave data.campo a mensagem do issue
            mappedErrors[issue.path.at(-1) as string] = issue.message
        })

        return mappedErrors
    }

    return {
        errors,
        validate
    }

}