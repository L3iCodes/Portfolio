import Card from "./Card"

export default function ProjectList({ list, onPreview }){
    
    const openProject = (index) => {
        // Return selected project information
        onPreview(list[index]);
    };

    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {list.map((project, index) => (
                <Card 
                    key={project._id}
                    id={project._id}
                    index={index}
                    name={project.name + ': ' + project.subtitle}
                    tags={project.tags}

                    onClick={openProject}
                />
            ))}

            {list.map((project, index) => (
                <Card 
                    key={project._id}
                    id={project._id}
                    index={index}
                    name={project.name + ': ' + project.subtitle}
                    tags={project.tags}

                    onClick={openProject}
                />
            ))}
            
        </div>
    )
}