import { House, PanelsTopLeft, UserRound } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(){
    const location = useLocation()
    const navigate = useNavigate()

    const currentPath = location.pathname;

    return(
        <div className={`flex w-full bg-secondary border-accent border-1 rounded-[5px] shadow-sm shadow-black/10 z-9
                        h-[60px] fixed bottom-0 left-0
                        md:sticky md:h-[40px] md:top-0 md:left-0`}>
            {mobileNavigation(currentPath, navigate)}
            {desktopNavigation(currentPath, navigate)}

            
        </div>
    )
}

function mobileNavigation(currentPath, navigate){
    return(
        <>
            <div className='flex items-center justify-center gap-20 w-full text-accent md:hidden'>
                <div
                    onClick={() => navigate('/')}
                    title='Home' 
                    className={`flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px] cursor-pointer ${currentPath === '/' && ('text-text')}`}
                    >
                        <House />
                        <h5>Home</h5>
                </div>

                <div 
                    onClick={() => navigate('/projects')}
                    title='Projects' 
                    className={`flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px] cursor-pointer ${currentPath === '/projects' && ('text-text')}`}
                    >
                        <PanelsTopLeft />
                        <h5>Projects</h5>
                </div>

                <div
                    onClick={() => navigate('/about')} 
                    title='About' 
                    className={`flex flex-col items-center justify-center hover:bg-primary p-1 h-[50px] w-[50px] rounded-[5px] cursor-pointer ${currentPath === '/about' && ('text-text')}`}
                    >
                        <UserRound />
                        <h5>About</h5>
                </div>
            </div>
            
        </>
    )
}

function desktopNavigation(currentPath, navigate){
    return(
        <>
            <div className='hidden items-center gap-20 mx-4 w-full md:flex'>
                <h3 className='text-subtext font-bold tracking-wide'>Wilhelm</h3>

                <div className='flex items-center ml-auto text-accent font-bold gap-8 '>
                    <h4 
                        onClick={() => navigate('/')}
                        className={`${currentPath === '/' && ('text-text')} cursor-pointer hover:text-subtext`}>Home</h4>
                    <h4 
                        onClick={() => navigate('/projects')}
                        className={`${currentPath === '/projects' && ('text-text')} cursor-pointer hover:text-subtext`}>Projects</h4>
                    <h4 
                        onClick={() => navigate('/about')}
                        className={`${currentPath === 'about' && ('text-text')} cursor-pointer hover:text-subtext`}>About</h4>
                </div>
            </div>
            
        </>
    )
}