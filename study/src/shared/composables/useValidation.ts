import type { ErrorType } from "@/modules/buscaCep/types/types";
import { ref } from "vue";
import type { ZodIssue, ZodType } from "zod";

//tipo de objeto reativo com chave string e valor string

//O tipo generico aqui deve ser um tipo com as propriedades a serem verficadas pelo schema.
export const useValidation = <T>(schema: ZodType) => {
    const errors = ref<ErrorType<T>>( {})

    //função de validação, se conter erro retorna null e atribui os erros para errors, senão retorna os dados do form
    const validate = (data:unknown) => {
        //reseta valor de errors, caso exista
        errors.value = {}

        const result = schema.safeParse(data)
        
        if(!result.success) {
            errors.value = mapErrors(result.error.issues)
            return null
        }

        return result.data
    }

    //recebe um array de issues do zod para mapear os erros
    //retorna um ErrorType do generico especificado
    const mapErrors = (issues: ZodIssue[]): ErrorType<T> => {
        const mappedErrors: ErrorType<T> = {}
        //para cada item do array, 
        issues.forEach(issue => {
            // path é um array, at(-1) pega sempre o ultimo item.
            const key = issue.path.at(-1) as string
            //atribui a chave do erro do issue para mapeedErrors e sua respectiva mensagem
             mappedErrors[key as keyof T] = issue.message
        })
        return mappedErrors
    }

    return {
        errors,
        validate
    }

}