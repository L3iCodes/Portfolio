import Tags from "./Tags"
import img from "../VystaImg.png"
import Button from "./Button"
import { Icon } from '@iconify/react'

export default function ProjectPreview({ project, onClose }){
    return(
        <div 
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/30 backdrop-blur-xs "
            >
                <div
                    onClick={(e) => e.stopPropagation()} 
                    className="flex flex-col gap-5 w-[90%] max-h-[90%] max-w-4xl bg-primary p-6 rounded-[5px] border-accent border-1 shadow-sm shadow-black/10 overflow-y-auto"
                    >
                    
                        {/* Project Name */}
                        <div>
                            <h2 className="font-bold text-text">{project.name}</h2>
                            <h3 className="text-subtext">{project.subtitle}</h3>
                        </div>
                        
                        {/* Project Tech Stack */}
                        <div className="flex flex-wrap w-full gap-1">
                            {project.tags.map((element) => (
                                <Tags tag={element}/>
                            ))}
                        </div>

                        <h4 className="text-subtext">{project.description}</h4>

                        {/* Project Image */}
                        <img 
                            src={img} 
                            alt={project.name + '|img'} 
                            className="rounded-[5px] transition-transform hover:scale-102"
                        />

                        {/* Project links */}
                        <div className="flex items-center w-full gap-2 bg-secondary p-3 rounded-[5px]">
                            <div className="w-[50%]">
                                <h4 className="font-medium">Demo & Code</h4>
                                <h5 className="text-subtext">View the full information here</h5>
                            </div>
                            <div className="flex items-center gap-1 w-[50%]">
                                <Button 
                                    className={'gap-1 w-[50%]  bg-primary border-1 border-accent shadow-sm'}
                                    >
                                            <Icon 
                                                icon="line-md:github" 
                                                width="16" 
                                                height="16" 
                                            />
                                            <h4>Code</h4>
                                </Button>
                                <Button 
                                    className={'w-[50%] border-1 border-accent'}
                                    >
                                        <h4>Demo</h4>
                                </Button>
                            </div>
                        </div>

                        {/* Project Features */}
                        <div className="flex flex-col w-full">
                            <h3 className="font-semibold mb-4">Features</h3>
                            <ol className="list-decimal pl-6 text-[14px]">
                                {project.features.map((element) => (
                                    <li className="mb-2"><span className="font-medium">{element.name}</span> - <span className="text-subtext">{element.description}</span></li>
                                ))}
                            </ol>
                        </div>
 
                </div>

        </div>
    )
}