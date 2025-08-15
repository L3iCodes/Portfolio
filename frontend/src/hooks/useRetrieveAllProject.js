import  { useQuery } from '@tanstack/react-query'
import { retrieveAllProject } from '../api/projects'

export function useRetrieveAllProject() {
    return useQuery({
        queryKey: ['projects'],
        queryFn: retrieveAllProject
    })
}