import  { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { retrieveAllProject, retrieveFeaturedProject, addProject, editProject, deleteProject } from '../api/projects'

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
            ['projects', 'featured_projects'].forEach(key =>
                queryClient.invalidateQueries(key)
            );
        },
    })

    const edit_project = useMutation({
        mutationFn: editProject,
        onSuccess: () => {
             ['projects', 'featured_projects'].forEach(key =>
                queryClient.invalidateQueries(key)
            );
        },
    })

    const delete_project = useMutation({
        mutationFn: deleteProject,
        onSuccess: () => {
             ['projects', 'featured_projects'].forEach(key =>
                queryClient.invalidateQueries(key)
            );
        },
    })

    return { project_list, featured_list, add_project, edit_project, delete_project}
}
