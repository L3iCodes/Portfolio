import { Icon } from '@iconify/react'

export default function InfoCard( {title, icon, className, children} ){
    return(
        <div className={`${className} flex flex-col w-full bg-secondary p-4 rounded-[5px] border-1 border-accent`}>
                        
            <div className="flex items-center gap-2 mb-3">
                <Icon icon={icon} width="20" height="20" />
                <h3 className="font-bold">{title}</h3>
            </div>
            
            {children}
            
        </div>
    )
}