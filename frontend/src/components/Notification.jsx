export default function Notification( { children, message, error = false }){
    return(
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 flex items-center justify-center bg-secondary border h-[30px] w-[300px] px-2 rounded-[4px] shadow-sm z-[100]
                         md:top-20 opacity-90
                        ${!error ? 'border-green-400 shadow-green-400' : 'border-red-400 shadow-red-400' }`}>
            <h4>{message}</h4>
            { children }
        </div>
    )
}