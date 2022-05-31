import React, { useContext,useState, useEffect } from "react"

const NavContext = React.createContext()

export function useNav(){
    return useContext(NavContext)
}

export function NavProvider({ children }) {
    const [activePage,setActivePage] = useState("home")

    const value = {
        activePage,
        setActivePage
    }

    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    )
}

