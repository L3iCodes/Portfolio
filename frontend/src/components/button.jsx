export default function Button({ children, className, onclick }){
    return(
        <div className={`${className} flex items-center justify-center bg-secondary p-1.5 shadow-sm shadow-black/10 rounded-[5px] cursor-pointer
                        hover:bg-accent`}>
            { children }
        </div>
    )
}