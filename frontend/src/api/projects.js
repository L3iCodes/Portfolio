export async function retrieveAllProject() {
    console.log('Retrieving all board')

    try {
        const res = await fetch('http://localhost:5000/api/project/all-project')

        if (!res.ok) {
            throw new Error('Failed to retrieve project')
        }

        const data = await res.json();
        return data.list
        
    } catch (error) {
        throw new Error('Failed to retrieve project. Error: ' + error.message)
    }
}
