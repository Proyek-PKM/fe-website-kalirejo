import React, { createContext, useContext, type ReactNode } from 'react';

interface SidebarContextType {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ 
  children: ReactNode, 
  toggleSidebar: () => void,
  isSidebarOpen: boolean
}> = ({ children, toggleSidebar, isSidebarOpen }) => {
  return (
    <SidebarContext.Provider value={{ toggleSidebar, isSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};