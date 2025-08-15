import Card from "./Card"

export default function ProjectList({ list }){
    
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {list.map((project, id) => (
                <Card 
                    key={project._id}
                    id={project._id}
                    name={project.name + ': ' + project.subtitle}
                    tags={project.tags}
                />
            ))}

            {list.map((project, id) => (
                <Card 
                    key={project._id}
                    id={project._id}
                    name={project.name + ': ' + project.subtitle}
                    tags={project.tags}
                />
            ))}

            {list.map((project, id) => (
                <Card 
                    key={project._id}
                    id={project._id}
                    name={project.name + ': ' + project.subtitle}
                    tags={project.tags}
                />
            ))}
            
        </div>
    )
}