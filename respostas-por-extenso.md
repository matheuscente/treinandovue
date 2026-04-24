
Identificar quando o TypeScript infere o tipo corretamente e quando é necessário anotar
explicitamente.

// Analise cada linha e classifique: INFERE ou PRECISA ANOTAR
const nome = "Vue"  INFERE
const versao = 3    INFERE
const ativo = true  INFERE

let usuario = null  NÃO INFERE, CORRETO: let user: User | null = null

let lista = []      NAO INFERE, CORRETO let lista: User[] = []

let resultado       NÃO INFERE, CORRETO let result: type | null

const soma = (a, b) => a + b  NÃO INFERE, CORREto: const soma = (a: number, b: number) => a + b

const saudar = (nome) => `Olá, ${nome}`   NAO INFERE CORRETO: const saudar = (nome: string) => `Olá, ${nome}`


async function buscarDados() {
const res = await fetch("/api/dados")
return res.json()
} NÃO INFERE, CORRETO: 

async function buscarDados (): Promise<Projeto[]> {
    const res: T | null = await fetch("/api/dados")
    resturn res.json() as Projeto[]
}

Lembre-se: o TS infere bem primitivos com valor inicial. Mas null, [], funções semparâmetros tipados e retornos de Promise precisam de anotação explícita.