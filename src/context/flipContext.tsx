"use client"

import { createContext, ReactNode, useState } from "react"

type Nav = "/" | "/works" | "/contact" | null

// Create the context with default values
const NavContext = createContext<{
  nav: Nav
  setNav: (nav: Nav) => void
}>({
  nav: null,
  setNav: () => {},
})

interface NavProviderProps {
  children: ReactNode
}

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [nav, setNav] = useState<Nav>(null)

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider }
