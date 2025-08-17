import { useState } from "react"
import Button from "../components/Button";

export default function EditProjectForm({ project }) {
    const [currentProject, setCurrentProject] = useState(project);
    const [tagsInput, setTagsInput] = useState(currentProject.tags.join(" "));
    const [features, setFeatures] = useState(
        currentProject.features
            ? currentProject.features.map(f => `${f.name}-${f.description}`).join("\n")
            : ""
    );

    return (
        <div className="flex flex-col gap-10">
            {/* Header */}
            <div>
                <h2 className="font-bold text-text text-lg">Edit Project</h2>
                <h3 className="text-subtext text-sm">Manage Project Information</h3>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6 text-[14px] text-text">
                
                {/* Name + Subtitle */}
                <div className="flex gap-5">
                    <FormField 
                        id="name" 
                        label="Project Name" 
                        value={currentProject.name} 
                        onChange={(val) => setCurrentProject({ ...currentProject, name: val })}
                    />
                    
                    <FormField 
                        id="subtitle" 
                        label="Project Subtitle" 
                        value={currentProject.subtitle} 
                        onChange={(val) => setCurrentProject({ ...currentProject, subtitle: val })}
                    />
                </div>

                {/* Tags + Links */}
                <div className="flex gap-5">
                    <FormTextArea
                        id="tags"
                        label="Tags"
                        value={tagsInput}
                        rows={5}
                        onChange={(val) => {
                            setTagsInput(val);
                            setCurrentProject({ 
                                ...currentProject, 
                                tags: val.split(" ").filter(tag => tag.trim() !== "")
                            });
                        }}
                    />

                    <div className="flex flex-col gap-5 w-full">
                        <FormField 
                            id="github"
                            label="GitHub URL"
                            value={currentProject.github_url}
                            onChange={(val) => setCurrentProject({ ...currentProject, github_url: val })}
                        />
                        <FormField 
                            id="demo"
                            label="Demo URL"
                            value={currentProject.demo_url}
                            onChange={(val) => setCurrentProject({ ...currentProject, demo_url: val })}
                        />
                    </div>
                </div>

                {/* Description */}
                <FormTextArea
                    id="description"
                    label="Description"
                    value={currentProject.description}
                    rows={8}
                    onChange={(val) => setCurrentProject({ ...currentProject, description: val })}
                />

                {/* Features */}
                <FormTextArea
                    id="feature"
                    label={
                        <>
                            Features 
                            <span className="text-text/80 text-[10px] italic ml-2">
                                (Format: name-description, e.g. Home Page-this is the description)
                            </span>
                        </>
                    }
                    value={features}
                    rows={8}
                    onChange={(val) => {
                        setFeatures(val);
                        const lines = val.split("\n");
                        setCurrentProject({
                            ...currentProject,
                            features: lines
                                .map(line => {
                                    const [name, ...descParts] = line.split("-");
                                    if (!name || !descParts.length) return null;
                                    return {
                                        name: name.trim(),
                                        description: descParts.join("-").trim()
                                    };
                                })
                                .filter(Boolean)
                        });
                    }}
                />

                {/* Image + Button */}
                <div className="flex gap-5 w-full justify-between">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="img" className="text-text">Upload Image</label>
                        <input id="img" type="file" className="!w-fit text-subtext" />
                    </div>
                    
                    <Button className="px-10 h-full mt-auto border-1 border-accent">Edit</Button>
                </div>
            </form>
        </div>
    )
}

/* --- Small Reusable Components --- */

function FormField({ id, label, value, onChange }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className="text-text">{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-secondary border border-accent rounded-md px-2 py-1 text-text"
                required
            />
        </div>
    );
}

function FormTextArea({ id, label, value, onChange, rows = 4 }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className="text-text">{label}</label>
            <textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
                className="w-full bg-secondary border border-accent rounded-md px-2 py-1 resize-none text-text"
                required
            />
        </div>
    );
}
