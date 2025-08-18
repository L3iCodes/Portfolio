import { createContext, useRef, useState } from "react";

export const NotificatioNContext = createContext();

export const NotificationProvider = ( { children } ) => {
    const [openNotification, setOpenNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const [error, setError] = useState(false)
      const timerRef = useRef(null);

    const handleNotification = (message, type) => {
        setError(type)
        setNotificationMessage(message);
        setOpenNotification(true);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setOpenNotification(false);
            setNotificationMessage("");
            setError(false);
        }, 3000);
    }

    return (
        <NotificatioNContext.Provider value={{openNotification, handleNotification, notificationMessage, error}}>
            { children }
        </NotificatioNContext.Provider>
    )
}