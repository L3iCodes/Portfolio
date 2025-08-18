import Project from "../models/Project.js";

export const retrieveAllProject = async (req, res) => {
    try{
        const projects = await Project.find({});
        res.status(201).json({list: projects});
    }catch(error){
        console.log(`Failed to retrieve project list. Error: ${error}`);
        return res.status(401);
    }
}

export const retrieveFeaturedProject = async (req, res) => {
    try{
        const projects = await Project.find({ featured: true });
        res.status(201).json({list: projects});
    }catch(error){
        console.log(`Failed to retrieve featured project list. Error: ${error}`);
        return res.status(401);
    }
}

export const addProject = async (req, res) => {
    const newProject  = req.body;

    try{
        await Project.create(newProject);
        console.log('Project added successfully')
        res.status(201).json({ message: "Project added successfully" });

    }catch(error){
        return res.status(401).json({ message: "Failed to add project" });
    };
};

export const editProject = async (req, res) => {
    const id = req.params.id;
    const newProject  = req.body;

    try{
        await Project.findByIdAndUpdate(
            id,
            { $set: newProject },
            { $new: true}
        )

        res.status(201).json({ message: "Project editted successfully" });

    }catch(error){
        return res.status(401).json({ message: "Failed to edit project" });
    };
};

export const deleteProject = async (req, res) => {
  const id = req.params.id;

  try{
      const deletedProject = await Project.findByIdAndDelete(id);

      if (!deletedProject) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.status(200).json({ message: "Project deleted successfully" });

  }catch(error){
      return res.status(401).json({ message: "Failed to delete project" });
  }

}