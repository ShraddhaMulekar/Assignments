import { createContext } from "react";

const chatContext = createContext(null)

export const ChatProvider = ({children})=>{
    const [open, setOpen] = useState(false);

    const openChat = () => setOpen(true);
    const closeChat = () => setOpen(false);
    const toggleChat = () => setOpen(prev => !prev);

    return(
        <chatContext.Provider value={{isOpen:open, openChat, closeChat, setOpen:toggleChat}}>
            {children}
        </chatContext.Provider>
    )
}