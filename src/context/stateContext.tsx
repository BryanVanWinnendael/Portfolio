"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface AuthContextType {
  bgColor: string;
  setBgColor: (color: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  activeNav: "home" | "archive" | "project";
  setActiveNav: (archived: "home" | "archive" | "project") => void;
}

const StateContext = createContext<AuthContextType | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [bgColor, setBgColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");
  const [activeNav, setActiveNav] = useState<"home" | "archive" | "project">(
    "home",
  );

  return (
    <StateContext.Provider
      value={{
        bgColor,
        setBgColor,
        textColor,
        setTextColor,
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useStates = (): AuthContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { StateProvider, useStates };
