export default function Tags({tag}){
    return(
        <div className={`flex items-center justify-center py-1 px-3 bg-primary w-fit rounded-[15px] border-1 border-accent
                        transition-transform duration-200 scrollbar-hide
                        hover:scale-105`}>
            <h5>{tag}</h5>
        </div>
    )
}