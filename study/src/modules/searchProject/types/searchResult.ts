import type { Project } from "./project";

export interface SearchResult {
    length: number,
    projects: Project[]
}