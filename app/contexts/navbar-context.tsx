"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  showWallet: boolean;
  setShowWallet: (show: boolean) => void;
  showNavbar: boolean;
  setShowNavbar: (show: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [showWallet, setShowWallet] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider
      value={{ showWallet, setShowWallet, showNavbar, setShowNavbar }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}
