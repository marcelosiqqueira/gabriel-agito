import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextProps {
    selectedButton: string
    handleSelectButton(value: string): void
}

interface GlobalProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextProps);


function GlobalProvider ({children}: GlobalProviderProps) {
    const [selectedButton, setSelectedButton] = useState('coverages')
    
    function handleSelectButton(value: string) {
        setSelectedButton(value)
    }

    return (
        <GlobalContext.Provider value={{selectedButton, handleSelectButton}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobal = () => useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobal
}