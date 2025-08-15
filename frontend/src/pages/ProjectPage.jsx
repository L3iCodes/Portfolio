import Header from "../components/Header"
import { useRetrieveAllProject } from '../hooks/useRetrieveAllProject';
import ProjectList from "../components/ProjectList";

export default function ProjectPage(){
    const { data, loading, error } = useRetrieveAllProject()
    console.log(data)


    return(
        <div className="flex flex-col gap-10 w-full h-full">
            <Header 
                main={<><span className="font-bold">My Projects</span></>}
                subtitle={'A showcase of the projects I’ve built with curiosity, creativity, and a lot of coffee, along with the lessons, skills, and insights I’ve picked up along the way.'}
                showContact={false}
            />

            {!loading && (
                <ProjectList list={data} />
            )}
            
        </div>
    )
}