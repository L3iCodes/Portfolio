import { House, PanelsTopLeft, UserRound } from 'lucide-react'

export default function Navbar(){
    return(
        <div className={`flex w-full bg-secondary border-accent border-1 rounded-[5px] shadow-sm shadow-black/10
                        h-[60px] fixed bottom-0 left-0
                        md:sticky md:h-[40px] md:top-0 md:left-0`}>
            {mobileNavigation()}
            
        </div>
    )
}

function mobileNavigation(){
    return(
        <>
            <div className='flex items-center justify-center gap-20 w-full  md:hidden'>
                <div title='Home' className='flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px]'>
                    <House />
                    <h5>Home</h5>
                </div>

                <div title='Projects' className='flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px]'>
                    <PanelsTopLeft />
                    <h5>Projects</h5>
                </div>

                <div title='About' className='flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px]'>
                    <UserRound />
                    <h5>About</h5>
                </div>
            </div>
            
        </>
    )
}