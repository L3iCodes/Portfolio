import { useEffect } from "react";

export default function Modal( { onClose, children } ){
    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return(
        <div 
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/30 backdrop-blur-xs "
            >
                
                <div
                    onClick={(e) => e.stopPropagation()} 
                    className="flex flex-col gap-5 w-[90%] max-h-[90%] max-w-4xl bg-primary p-6 rounded-[5px] border-accent border-1 shadow-sm shadow-black/10 overflow-y-auto"
                    >
                        { children }
                </div>
        </div>
    )
}