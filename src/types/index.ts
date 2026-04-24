type Status = "active" | "paused" | "finished"

type Priority =  "low" | "middle" | "hight"

interface Project {
    id: number,
    name: string,
    description?: string,
    creationDate: Date,
    ownerId: number,
    status: Status
}

interface task {
    id: number,
    title: string,
    finished: boolean,
    priority: Priority,
    projectId: number,
    term?: Date
}

interface ApiResponse<T> {
    data: T,
    message: string,
    success: boolean,
    total?: number
}

type newProject = Omit<Project, 'id | creationDate'>

type projectEdit = Partial<newProject>