import { useEffect, useState } from "react";
import Card from "./Card"

export default function ProjectList({ list, onPreview }){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    })

    const openProject = (index) => {
        // Return selected project information
        onPreview(list[index]);
    };

    // 🔹 Loading skeleton renderer
    const renderLoading = () => {
        return Array(4).fill(0).map((_, index) => (
            <div
                key={`skeleton-${index}`}
                className="flex flex-col gap-2 w-full h-[231px] bg-secondary rounded-[5px] border-accent border-1 shadow-sm shadow-black/10 animate-pulse p-4"
                >
                    <div className="w-full h-28 bg-primary rounded" />
                    <div className="w-3/4 h-4 bg-primary rounded" />
                    <div className="w-1/2 h-4 bg-primary rounded" />
            </div>
        ));
    };

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {!list
                ? renderLoading()
                : list.map((project, index) => (
                    <Card
                        key={project._id}
                        id={project._id}
                        index={index}
                        name={project.name + ": " + project.subtitle}
                        tags={project.tags}
                        img_url={project.image.url}
                        onClick={openProject}
                    />
                ))}
        </div>
    )
}