import { Computer, Linkedin, Github } from 'lucide-react'
import Button from '../components/button';

export default function HomePage(){
    return(
        <div className="flex flex-col gap-2">
            <h1>Hey, I'm <span className='font-bold'>Wilhelm</span></h1>
            <h3 className="text-subtext">Fresh graduate and aspiring full-stack developer with skills in React, backend technologies, and AI. Experience includes deep learning and NLP projects developed during research and applied work.</h3>

            <div className={`flex mt-2 gap-2 items-center
                            md:gap-3`}>
                <Button><Linkedin size={22}/></Button>
                <Button><Github size={22}/></Button>
                <Button className={'px-4'}><h3>Email</h3></Button>
                <h3 className='text-subtext hover:text-text cursor-pointer ml-2'>(+63) 0961 365 5723</h3>
            </div>
        </div>
    );
}