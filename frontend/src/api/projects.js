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
