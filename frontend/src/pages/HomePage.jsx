import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import { useRetrieveAllProject } from '../hooks/useRetrieveAllProject';
import ProjectPreview from '../components/ProjectPreview';
import { useState } from 'react';

export default function HomePage(){
    
    const { data, isLoading, error } = useRetrieveAllProject();
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
            
            <div className='pageWrapper'>
                <div className="flex flex-col gap-25 w-full h-full">
                    <Header 
                        main={<>Hey, I'm <span className="font-bold">Wilhelm</span></>}
                        subtitle={'Fresh graduate and aspiring full-stack developer with skills in React, backend technologies, and AI. Experience includes deep learning and NLP projects developed during research and applied work.'}
                        showContact={true}
                    />

                    <div className='flex mx-[10%] sm:mx-[0%] md:mx-[10%]'>
                        <TechStack key={'home-techstack'}/>
                    </div>

                    <div>
                        <h2 className='font-medium mb-8'>Experience</h2>
                        <Experience />
                    </div>

                    {!isLoading && (
                        <>
                            <div className='flex flex-col'>
                                <h2 className='font-medium mb-8'>Featured Projects</h2>
                                <ProjectList list={data} onPreview={onPreview}/>
                            </div>

                            
                        </>
                    )}
                    
                </div>
            </div>
            
        </>
        
    );
}