export default function CardLoading(){
     
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Array(4).fill(0).map((_, index) => (
                <div
                    key={`skeleton-${index}`}
                    className="flex flex-col gap-2 w-full h-[231px] bg-accent rounded-[5px] border border-secondary shadow-sm shadow-black/10 animate-pulse p-4"
                    >
                        <div className="w-full h-28 bg-primary rounded" />
                        <div className="w-3/4 h-4 bg-primary rounded" />
                        <div className="w-1/2 h-4 bg-primary rounded" />
                </div>
            ))}
        </div>

    )
}