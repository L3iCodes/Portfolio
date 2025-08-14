import { useState } from "react"

export default function Experience() {
    const [color, setColor] = useState('bg-secondary')

    return(
        <div 
            onMouseEnter={() => setColor('bg-accent')}
            onMouseLeave={() => setColor('bg-secondary')}
            className="flex gap-5">
            <div className="flex flex-col items-center justify-center">
                <div className={`w-[15px] h-[15px] ${color} rounded-full`} />
                <div className={`w-[5px] h-full ${color} rounded-[5px] mt-[-5px]`} />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                    <h3 className="text-text mr-2 font-bold">Iraya Energies</h3>
                    <h4 className="text-subtext"> | Kuala Lumpur, Malaysia (Remote)</h4>
                </div>
                <h4 className="text-subtext">Student Intern</h4>
                <h4 className="text-subtext mb-5">June 2024 - July 2024</h4>
                <h4 className="text-subtext mb-5">Contributed to the development of Raya, a  chatbot application designed to process unstructured data and enable  document retrieval through conversational interfaces.</h4>
                <ul className="list-disc pl-5 text-[14px] text-subtext">
                    <li>Developed core chatbot functionality and AI system using OLLAMA for AI inference and used LlamaIndex for multi-document agent capabilities.</li>
                    <li>Implemented Retrieval-Augmented Generation (RAG) architecture.</li>
                    <li>Built responsive user interface using Streamlit.</li>
                    <li>Containerized complete application using Docker.</li>
                </ul>
            </div>
        </div>
        
    )
}