
import { projects } from "../data"
import type { EditProjectParams, Project, SearchProjectsParams } from "../types/types"

export const projectService = () => {

    const getProjects = (data: SearchProjectsParams): Project[] => {
     return projects.value.filter((project) => {
        const matchName = !data.nome || project.nome.toLowerCase().includes(data.nome)
        const matchStatus = data.projectStatus === "todos" || project.status === data.projectStatus
        return matchName && matchStatus
     })
    }

     const deleteProject = (id: number) => {
      console.log(id)
        projects.value.forEach(project => {
            if(project.id === id) projects.value.splice(projects.value.indexOf(project), 1)
        })
     }

     const editProject = (id: number, data: EditProjectParams) => {
        projects.value.forEach(project => {
            if(project.id === id) {
               switch(data.editType) {
                  case "nome": 
                     project.nome = data.data
                  break

                  case "status":
                     project.status = data.data
                  break

                  case "ambos":
                     project.nome = data.data.nome
                     project.status = data.data.status
               }
            }
        })
     }
     return {
        getProjects,
        editProject,
        deleteProject
     }

}