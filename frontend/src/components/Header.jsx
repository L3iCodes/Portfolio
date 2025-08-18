
import { Icon } from '@iconify/react'
import Button from '../components/Button';
import { useState, useContext } from 'react';
import profile from "../profile.png"
import profile2 from "../profile2.png"
import { NotificatioNContext } from "../context/NotificationContext";


export default function Header({ main, subtitle, showContact = true, includeImg = false }){

    const [emailClicked, setEmailClicked] = useState(false)
    const [currentProfile, setCurrentProfile] = useState(profile)
    const { handleNotification } = useContext(NotificatioNContext)

    return(
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-end flex-col md:flex-row'>
                <div className='flex flex-col'>
                    <h1 className='mt-10'>{main}</h1>
                    <h3 className="text-subtext">{subtitle}</h3>
                </div>
                
                {includeImg && (
                    <img 
                        onMouseEnter={() => setCurrentProfile(profile2)}
                        onMouseOut={() => setCurrentProfile(profile)}
                        src={currentProfile}
                        className='md:max-w-[180px] md:max-h-[180px] border-accent border-1 rounded-[5px]
                                    transition-all duration-500 ease-in-out
                                    opacity-100'
                    />
                )}
                
            </div>
            

            {showContact && (
                <div className={`flex mt-2 gap-2 items-center
                            md:gap-3`}>
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
                    
                    <div title='janwilhelmtan.sy@gmail.com'> 
                        <Button 
                            onClick={() => {
                                const email = 'janwilhelmtan.sy@gmail.com'
                                navigator.clipboard.writeText(email)
                                handleNotification('Email copied', false)
                                setEmailClicked(true)
                                
                                setTimeout(() => {
                                    setEmailClicked(false)
                                }, 3000)
                                
                            }}
                            className={'flex gap-2 px-4'}
                            >
                                {emailClicked 
                                    ? (
                                        <>
                                            <Icon className='text-subtext' icon="si:copy-line" width="20" height="20" /> 
                                            <h4 className='text-subtext'>Copied</h4>
                                        </>
                                    ) 
                                    : (
                                        <h3>Email</h3>
                                    )
                                }
                        </Button>
                    </div>
                    

                    <h3
                        onClick={() => {
                            const contact = '0961 365 5723'
                            navigator.clipboard.writeText(contact)
                            handleNotification('Contact number copied', false)
                        }} 
                        className='text-subtext hover:text-text active:text-subtext cursor-pointer ml-2'
                        >
                            (+63) 961 365 5723
                    </h3>
                </div>
            )}
            
        </div>
    )
}