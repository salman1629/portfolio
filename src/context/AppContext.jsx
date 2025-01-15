import { createContext, useState } from "react";


export const AppContext = createContext()

export default function AppContextProvider({children}){

    const [isTransitioning,setIsTransitioning] = useState(false)

    return(
        <AppContext.Provider value={{isTransitioning,setIsTransitioning}} >
            {children}
        </AppContext.Provider>
    )


}