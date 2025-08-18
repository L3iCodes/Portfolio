import Tags from "./Tags"

export default function Card({ id, index, name, tags, img_url, onClick }){
    return(
        <div 
            onClick={() => onClick(index)}
            className="w-full  bg-secondary rounded-[5px] overflow-hidden border-accent border-1 shadow-sm shadow-black/10 cursor-pointer"
            >
                <div className={`h-[70%] bg-accent overflow-hidden
                                transition-transform 
                                hover:scale-102`}>
                    <img 
                        src={img_url} 
                        alt={name + '|img'} 
                        className="w-full h-full object-contain"
                    />
                </div>
                
                <div className="flex items-center w-full h-[30%] p-2">
                    <div className="flex flex-col gap-2 w-full">
                        <h4 className="font-semibold truncate">{name}</h4>
                        <div className="flex w-full gap-1 overflow-y-auto scrollbar-hide">
                            {tags.map((element, index) => (
                                <Tags key={`${id}-${element}-${index}`} tag={element}/>
                            ))}
                        </div>
                    </div>

                </div>
        </div>
    )
}