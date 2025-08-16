import Header from "../components/Header"
import { useState } from "react";
import { useRetrieveAllProject } from '../hooks/useRetrieveAllProject';
import ProjectList from "../components/ProjectList";
import ProjectPreview from "../components/ProjectPreview";


export default function ProjectPage(){
    const { data, isLoading, error } = useRetrieveAllProject()
    const [ openPreview, setOpenPreview ] = useState(false);
    const [ project, setProject ] = useState([]);
    
    const onPreview = (project) => {
        setOpenPreview(true);
        setProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setOpenPreview(false);
        setProject([]);
        document.body.style.overflow = 'auto';
    };

    return(
        <>
            {openPreview && (
                <ProjectPreview project={project} onClose={closePreview}/>
            )}

            <div className="flex flex-col gap-10 w-full h-full">
                <Header 
                    main={<><span className="font-bold">My Projects</span></>}
                    subtitle={'A showcase of the projects I’ve built with curiosity, creativity, and a lot of coffee, along with the lessons, skills, and insights I’ve picked up along the way.'}
                    showContact={false}
                />

                {!isLoading && (
                    <ProjectList list={data} onPreview={onPreview}/>
                )}
                
            </div>
        </>
        
    )
}