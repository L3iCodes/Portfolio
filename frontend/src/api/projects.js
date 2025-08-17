const BACKEND_URL = 'http://localhost:5000'

export async function retrieveAllProject() {
    console.log('Retrieving all board')

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
    console.log('Retrieving Featured Projects')

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
    console.log('Starting upload process');

    try{
        const formData = new FormData();
        formData.append("file", newProject.image);
        
        // Upload the image
        const image = await fetch(`${BACKEND_URL}/api/image/upload-image`, {
            method: 'POST',
            body:formData
        });

        if(!image.ok){
            console.log('Failed to upload image', + image.status)
            throw new Error(errorMsg || "Image upload failed");
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
            throw new Error(errorMsg || "Failed to upload project in the database");
        }

        console.log(response.json())

        
    }catch(error){
        throw new Error('Failed to add new project. Error: ' + error.message)
    }
}
