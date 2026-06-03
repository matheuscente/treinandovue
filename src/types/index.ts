export type Status = "active" | "paused" | "finished"

export type Priority =  "low" | "middle" | "hight"

export interface Project {
    id: number,
    name: string,
    description?: string,
    creationDate: Date,
    ownerId: number,
    status: Status
}

export interface user {
    username: string,
    password: string
}

export interface task {
    id: number,
    title: string,
    finished: boolean,
    priority: Priority,
    projectId: number,
    term?: Date
}

export interface ApiResponse<T> {
    data: T,
    message: string,
    success: boolean,
    total?: number
}

export interface Entrada {
valor: number
operacao: 'dec' | 'inc' | 'res'
}

export type newProject = Omit<Project, 'id | creationDate'>

export type projectEdit = Partial<newProject>