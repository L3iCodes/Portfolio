const BACKEND_URL = 'http://localhost:5000'

export async function retrieveAllProject() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/project/all-project`)

        if (!res.ok) {
            throw new Error('Failed to retrieve projects')
        }

        const data = await res.json();
        return data.list
        
    } catch (error) {
        throw new Error('Failed to retrieve projects. Error: ' + error.message)
    }
}

export async function retrieveFeaturedProject() {
    try{
        const res = await fetch(`${BACKEND_URL}/api/project/featured-project`)

        if(!res.ok){
            throw new Error('Failed to retrieve featured projects')
        }

        const data = await res.json()
        return data.list

    }catch(error){
        throw new Error('Failed to retrieve featured projects. Error: ' + error.message)
    }
}

export async function addProject(newProject){
    try{
        const formData = new FormData();
        formData.append("file", newProject.image);
        
        // Upload the image
        const image = await fetch(`${BACKEND_URL}/api/image/upload-image`, {
            method: 'POST',
            body:formData
        });

        if(!image.ok){
            throw new Error("Image upload failed. Max size: 10MB.");
        }

        // Update image property in the object
        const { imgInfo } = await image.json()
        newProject.image = imgInfo;

        // Upload new project in db
        const response = await fetch(`${BACKEND_URL}/api/project/add-project`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProject)
        })

        if(!response.ok){
            throw new Error("Failed to upload project in the database");
        }
        
    }catch(error){
        throw error;
    }
}

export async function editProject(newProject) {
    try{
        if (newProject.image instanceof File) {
            const formData = new FormData();
            formData.append("file", newProject.image);
            
            // Upload the image
            const image = await fetch(`${BACKEND_URL}/api/image/upload-image`, {
                method: 'POST',
                body:formData
            });

            if(!image.ok){
                throw new Error("Image upload failed. Max size: 10MB.");
            }

            const { imgInfo } = await image.json()
            newProject.image = imgInfo;
        }

        // Upload editted project in db
        const response = await fetch(`${BACKEND_URL}/api/project/edit-project/${newProject._id}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProject)
        })

        if(!response.ok){
            throw new Error("Failed to edit project information");
        }
    }catch(error){
        throw error;
    }
    
}
