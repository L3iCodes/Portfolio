import { useState } from "react";
import Button from "../components/Button";

const emptyProject = {
  name: "",
  subtitle: "",
  description: "",
  tags: [],
  features: [],
  featured: false,
  github_url: "",
  demo_url: "",
  image: null,
};

export default function AddProjectForm() {
  const [currentProject, setCurrentProject] = useState(emptyProject);
  const [tagsInput, setTagsInput] = useState("");
  const [features, setFeatures] = useState("");

  const addProject = (e) => {
    e.preventDefault();
    console.log(currentProject);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <h2 className="font-bold text-text text-lg">Add Project</h2>
        <h3 className="text-subtext text-sm">Fill out the form to create a new project</h3>
      </div>

      {/* Form */}
      <form onSubmit={addProject} className="flex flex-col gap-6 text-[14px] text-text">
        {/* Name + Subtitle */}
        <div className="flex gap-5">
          <FormField
            id="name"
            label="Project Name"
            placeholder="My Portfolio Website"
            value={currentProject.name}
            onChange={(val) => setCurrentProject({ ...currentProject, name: val })}
          />

          <FormField
            id="subtitle"
            label="Project Subtitle"
            placeholder="A full-stack app built with MERN"
            value={currentProject.subtitle}
            onChange={(val) => setCurrentProject({ ...currentProject, subtitle: val })}
          />
        </div>

        {/* Tags + Links */}
        <div className="flex gap-5">
          <FormTextArea
            id="tags"
            label="Tags"
            placeholder="react nodejs mongodb"
            value={tagsInput}
            rows={5}
            onChange={(val) => {
              setTagsInput(val);
              setCurrentProject({
                ...currentProject,
                tags: val.split(" ").filter((tag) => tag.trim() !== ""),
              });
            }}
          />

          <div className="flex flex-col gap-5 w-full">
            <FormField
              id="github"
              label="GitHub URL"
              placeholder="https://github.com/username/repo"
              value={currentProject.github_url}
              onChange={(val) => setCurrentProject({ ...currentProject, github_url: val })}
            />
            <FormField
              id="demo"
              label="Demo URL"
              placeholder="https://myapp.vercel.app"
              value={currentProject.demo_url}
              onChange={(val) => setCurrentProject({ ...currentProject, demo_url: val })}
            />
          </div>
        </div>

        {/* Description */}
        <FormTextArea
          id="description"
          label="Description"
          placeholder="This project allows users to..."
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
          placeholder={`Home Page-browse content\nSearch-search projects`}
          value={features}
          rows={8}
          onChange={(val) => {
            setFeatures(val);
            const lines = val.split("\n");
            setCurrentProject({
              ...currentProject,
              features: lines
                .map((line) => {
                  const [name, ...descParts] = line.split("-");
                  if (!name || !descParts.length) return null;
                  return {
                    name: name.trim(),
                    description: descParts.join("-").trim(),
                  };
                })
                .filter(Boolean),
            });
          }}
        />

        {/* Image + Button */}
        <div className="flex gap-5 w-full justify-between">
          <div className="flex flex-col gap-1">
            <label htmlFor="img" className="text-text">
              Upload Image
            </label>
            <input
              id="img"
              type="file"
              required={true}
              accept="image/png, image/jpeg"
              className="!w-fit text-subtext"
              onChange={(e) => {
                const file = e.target.files[0];
                setCurrentProject({ ...currentProject, image: file });
              }}
            />
          </div>

          <Button type={'submit'} className="px-10 h-full mt-auto border-1 border-accent">Add</Button>
        </div>
      </form>
    </div>
  );
}

/* --- Reusable Components --- */
function FormField({ id, label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-text">{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-secondary border border-accent rounded-md px-2 py-1 text-text"
        required={true}
      />
    </div>
  );
}

function FormTextArea({ id, label, value, onChange, rows = 4, placeholder }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-text">{label}</label>
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full bg-secondary border border-accent rounded-md px-2 py-1 resize-none text-text"
        required={true}
      />
    </div>
  );
}