import  { useQuery } from '@tanstack/react-query'
import { retrieveAllProject, retrieveFeaturedProject } from '../api/projects'

export function useProjectData() {
    const project_list = useQuery({
        queryKey: ['projects'],
        queryFn: retrieveAllProject
    })

    const featured_list = useQuery({
        queryKey: ['featured_projects'],
        queryFn: retrieveFeaturedProject
    })
    
    return { project_list, featured_list }
}
