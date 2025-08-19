import { Icon } from '@iconify/react'

export default function TechStack() {
    const skills = [
        { name: "JavaScript", icon: "material-symbols:javascript", color: "#DAC33F" },
        { name: "NodeJS", icon: "mdi:nodejs", color: "#517EBA" },
        { name: "Python", icon: "proicons:python", color: "#3776AB" },
        { name: "GitHub", icon: "meteor-icons:github", color: "#181717" },
        { name: "React", icon: "akar-icons:react-fill", color: "#336AB2" },
        { name: "ExpressJS", icon: "devicon:express", color: "#DAC33F" },
        { name: "Tensorflow", icon: "simple-icons:tensorflow", color: "#F09A37" },
        { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
        { name: "TailwindCSS", icon: "mdi:tailwind", color: "#517EBA" },
        { name: "MongoDB", icon: "lineicons:mongodb", color: "#49942E" },
        { name: "HuggingFace", icon: "simple-icons:huggingface", color: "#DAC33F" },
        { name: "Figma", icon: "solar:figma-bold", color: "#8135C4" },
    ];

    
    return(
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((element, id) => (
                <div 
                    key={element.name} 
                    className={`flex items-center gap-2 bg-secondary p-1 rounded-[10px]
                                border border-transparent
                                transition-transform duration-200 
                                hover:scale-105 hover:border-accent`}>
                    <Icon 
                        icon={element.icon} 
                        width="35" 
                        height="35" 
                        className= {`p-1.5 rounded-[8px]`}
                        style={{ backgroundColor: element.color }}
                    />

                    <h4>{element.name}</h4>
                </div>
            ))}
        </div>
    )
}