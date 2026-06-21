import { ref } from "vue";
import type { Project } from "./types/project";

export const projects = ref<Project[]>([
{ id: 1, nome: 'Sistema de Vendas', status: 'ativo' },
{ id: 2, nome: 'App Mobile', status: 'pausado' },
{ id: 3, nome: 'Portal RH', status: 'ativo' },
{ id: 4, nome: 'Integração API', status: 'concluido' },
]
)