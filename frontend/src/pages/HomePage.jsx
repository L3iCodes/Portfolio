import { Computer, Linkedin, Github } from 'lucide-react'
import { Icon } from '@iconify/react'
import Button from '../components/Button';
import TechStack from '../components/TechStack';

export default function HomePage(){
    return(
        <div className="flex flex-col gap-2 w-full h-full">
            <h1 className='mt-10'>Hey, I'm <span className='font-bold'>Wilhelm</span></h1>
            <h3 className="text-subtext">Fresh graduate and aspiring full-stack developer with skills in React, backend technologies, and AI. Experience includes deep learning and NLP projects developed during research and applied work.</h3>

            <div className={`flex mt-2 gap-2 items-center
                            md:gap-3`}>
                <Button><Icon icon="ri:linkedin-fill" width="24" height="24" /></Button>
                <Button><Icon icon="mingcute:github-fill" width="24" height="24" /></Button>
                <Button className={'px-4'}><h3>Email</h3></Button>
                <h3 className='text-subtext hover:text-text cursor-pointer ml-2'>(+63) 0961 365 5723</h3>
            </div>

            <div className='flex mx-[10%] my-20'>
                <TechStack />
            </div>

            <div>
                <h2 className='font-medium'>Experience</h2>
                
            </div>
        </div>
    );
}