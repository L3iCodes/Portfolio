import { Icon } from '@iconify/react'
import Button from './Button'

export default function Footer(){


    return(
        <div className={`hidden md:flex w-full bg-secondary border-accent border-1 rounded-[5px] shadow-sm shadow-black/10 z-9 mt-15 h-[50px]`}>
            
            <div className='items-center gap-20 mx-4 w-full md:flex'>
                <h3 className='text-subtext font-bold tracking-wide'>Wilhelm</h3>

                <div className={`flex gap-2 items-center ml-auto`}>
                    <Button onClick={() => window.open(
                        "https://www.linkedin.com/in/jan-wilhelm-sy-8665b9379", 
                        "_blank", 
                        "noopener,noreferrer"
                        )}>
                            <Icon icon="ri:linkedin-fill" width="24" height="24" />
                    </Button>

                    <Button
                        onClick={() => window.open(
                            "https://github.com/L3iCodes", 
                            "_blank", 
                            "noopener,noreferrer"
                        )}>
                            <Icon icon="mingcute:github-fill" width="24" height="24" />
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}