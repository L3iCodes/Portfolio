import  { useQuery } from '@tanstack/react-query'
import { retrieveAllProject } from '../api/projects'

export function useProjectData() {
    const project_list = useQuery({
        queryKey: ['projects'],
        queryFn: retrieveAllProject
    })
    
    return { project_list }
}
