import Project from "../models/Project.js";

const sampleData = {
  "name": "Vysta",
  "subtitle": "A movie discovery and watchlist management app",
  "description": "A React-based movie web app powered by TMDB. Users can browse and search for movies, create accounts, log in, and manage a personal watchlist. Built with React for the frontend, Node.js for the backend, and MongoDB for data storage.",
  "features": [
    {
      "name": "Home Page",
      "description": "View trending movies, top rated films, and upcoming releases in a carousel layout."
    },
    {
      "name": "Browse Movies",
      "description": "Browse movies by genre with pagination. Each genre has its own dedicated page for easier discovery."
    },
    {
      "name": "Movie Details",
      "description": "View detailed movie information including plot, cast, and similar movie recommendations."
    },
    {
      "name": "Search Functionality",
      "description": "Search for movies with real-time results."
    },
    {
      "name": "User Authentication",
      "description": "Register and login to access personalized features like watchlists."
    },
    {
      "name": "Watchlist",
      "description": "Add movies to your personal watchlist and remove them as needed. Requires user account."
    }
  ],
  "tags": ["Javascript", "React", "TailwinCSS", "NodeJs", "ExpressJS", "MongoDB"],
  "link": "https://github.com/L3iCodes/Vysta",
  "demo": "someLink.com",
  "featured": false,
  "img": "vystaImg"
}


export const retrieveAllProject = async (req, res) => {
    console.log('Retrieving all projects from database');

    try{
        const projects = await Project.find({});
        res.status(201).json({list: projects});
    }catch(error){
        console.log(`Failed to retrieve project list. Error: ${error}`);
        return res.status(401);
    }
}

export const retrieveFeaturedProject = async (req, res) => {
    console.log('Retrieving all featured projects from database');

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
    console.log('Adding project to database');
    

    try{
        await Project.create(newProject);
        console.log('Project added successfully')
        res.status(201).json({ message: "Project added successfully" });

    }catch(error){
        console.log(`Failed to add new project. Error: ${error}`);
        return res.status(401);
    };
};

export const editProject = async (req, res) => {
    const id = req.params.id;
    const newProject  = req.body;
    console.log('Editing Project ID: ' + id );
    
    try{
        await Project.findByIdAndUpdate(
            id,
            { $set: newProject },
            { $new: true}
        )

        console.log('Project editted successfully')
        res.status(201).json({ message: "Project editted successfully" });

    }catch(error){
        console.log(`Failed to add new project. Error: ${error}`);
        return res.status(401);
    };
};