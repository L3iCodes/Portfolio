export default function Notification( { children, message, error = false }){
    return(
        <div className={`flex items-center justify-center bg-secondary border-1 h-[30px] w-[300px] px-2 absolute top-5 left-1/2 -translate-x-1/2 rounded-[4px] shadow-sm z-100
                        ${!error ? 'border-green-400 shadow-green-400' : 'border-red-400 shadow-red-400' }`}>
            <h4>{message}</h4>
            { children }
        </div>
    )
}