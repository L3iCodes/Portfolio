
import { Icon } from '@iconify/react'
import Button from '../components/Button';

export default function Header({ main, subtitle, showContact = true }){
    return(
        <div className='flex flex-col gap-2'>
            <h1 className='mt-10'>{main}</h1>
            <h3 className="text-subtext">{subtitle}</h3>

            {showContact && (
                <div className={`flex mt-2 gap-2 items-center
                            md:gap-3`}>
                    <Button><Icon icon="ri:linkedin-fill" width="24" height="24" /></Button>
                    <Button><Icon icon="mingcute:github-fill" width="24" height="24" /></Button>
                    <Button className={'px-4'}><h3>Email</h3></Button>
                    <h3 className='text-subtext hover:text-text cursor-pointer ml-2'>(+63) 0961 365 5723</h3>
                </div>
            )}
            
        </div>
    )
}