import  { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { retrieveAllProject, retrieveFeaturedProject, addProject } from '../api/projects'

export function useProjectData() {

    const queryClient = useQueryClient();

    const project_list = useQuery({
        queryKey: ['projects'],
        queryFn: retrieveAllProject
    });

    const featured_list = useQuery({
        queryKey: ['featured_projects'],
        queryFn: retrieveFeaturedProject
    });

    const add_project = useMutation({
        mutationFn: addProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["projects"] });
        },
        onError: () => {
            alert("Something went wrong!");
        }
    })

    return { project_list, featured_list, add_project }
}
