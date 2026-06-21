import type { ProjectStatus } from "./projectStatus";

export interface Project {
    id: number,
    nome: string,
    status: ProjectStatus
}