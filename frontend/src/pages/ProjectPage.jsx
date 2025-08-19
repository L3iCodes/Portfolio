import Header from "../components/Header"
import { useState } from "react";
import { useProjectData } from "../hooks/useProjectData";
import ProjectList from "../components/ProjectList";
import ProjectPreview from "../components/ProjectPreview";
import { usePreview } from "../hooks/usePreview";
import CardLoading from "../components/CardLoading";


export default function ProjectPage(){
    const { project_list } = useProjectData()
    const { data, isLoading, error } = project_list;
    const {openPreview, project, onPreview, closePreview} = usePreview()

    return(
        <>
            {openPreview && (
                <ProjectPreview project={project} onClose={closePreview}/>
            )}

            <div className="flex flex-col gap-10 w-full min-h-full">
                <Header 
                    main={<><span className="font-bold">My Projects</span></>}
                    subtitle={'A showcase of the projects I’ve built with curiosity, creativity, and a lot of coffee, along with the lessons, skills, and insights I’ve picked up along the way.'}
                    showContact={false}
                />

                {/* {isLoading 
                    ? <CardLoading />
                    : data.length > 0 
                        ? <ProjectList key={'project_list'} list={data} onPreview={onPreview}/>
                        : <p className="text-subtext mt-[-20px]">No project yet</p>
                } */}

                {isLoading 
                    ? <CardLoading />
                    : <ProjectList key={'project_list'} list={data} onPreview={onPreview}/>
                }
                
            </div>
        </>
        
    )
}