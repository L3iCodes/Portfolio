
import { useState } from "react";
import { useProjectData } from "../hooks/useProjectData"
import ProjectList from "../components/ProjectList";
import { usePreview } from "../hooks/usePreview";

import Header from "../components/Header"
import Button from "../components/Button";
import Modal from "../components/Modal";
import EditProjectForm from "../forms/editProject.form";
import AddProjectForm from "../forms/addProject.form";
import CardLoading from "../components/CardLoading";

export default function ProjectManagement(){
    const { project_list, featured_list } = useProjectData();
    const { openPreview, project:currentProject, onPreview, closePreview  } = usePreview();
    const [openAdd, setOpenAdd] = useState(false)

    const { data:project, isLoading:isProjectLoading  } = project_list;
    const { data:featured, isLoading:isFeaturedLoading  } = featured_list;

    return(
        <div className="flex flex-col gap-15 w-full h-full relative">

            {openPreview && (
                <Modal onClose={closePreview}> <EditProjectForm project={currentProject} onClose={closePreview}/> </Modal>
            )}

            {openAdd && (
                <Modal onClose={() => setOpenAdd(false)}> <AddProjectForm/> </Modal>
            )}
            
            <Header 
                main={<span className="font-bold">Project Management</span>}
                subtitle={'Organize, manage, and customize the projects that will be showcased in your portfolio, making it easier to highlight your most meaningful work and present your skills in the best possible way.'}
                showContact={false}
                includeImg={false}
            />

            <div className="flex flex-col p-2 border-1 border-accent rounded-[10px]">
                <h2 className='font-medium mb-5'>Featured Projects</h2>
                
                {isFeaturedLoading 
                    ? <CardLoading />
                    : featured.length > 0 
                        ? <ProjectList key={'project_list'} list={featured} onPreview={onPreview}/>
                        : <p className="text-subtext mt-[-20px]">No project yet</p>
                }
            </div>

             <div className="flex flex-col p-2 border-1 border-accent h-fit rounded-[10px]">
                <div className="flex justify-between">
                    <h2 className='font-medium mb-5'>Projects</h2>
                    <Button onClick={() => setOpenAdd(true)} className={'h-full border-1 border-accent'}>Add Project</Button>
                </div>
                
                {isProjectLoading 
                    ? <CardLoading />
                    : project.length > 0 
                        ? <ProjectList key={'project_list'} list={project} onPreview={onPreview}/>
                        : <p className="text-subtext mt-[-20px]">No project yet</p>
                }
            </div>
        </div>
    )
}