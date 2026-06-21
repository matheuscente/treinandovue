import type { ProjectStatus } from "./types";

    export interface SearchProjectsParams {
        nome: string,
        projectStatus: ProjectStatus
    }