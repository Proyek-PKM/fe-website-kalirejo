import "./DashboardLayout.css";
import "./Scrollbar/Scrollbar.css";
import { Outlet } from "react-router-dom";
import LandingSidebar from "./Sidebar/LandingSidebar";
import { useState, useEffect } from "react";
import { SidebarProvider } from "../contexts/SidebarContext";

function LandingLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // On mobile, set sidebar to closed by default
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarProvider toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      <div className="h-[100vh] bg-[#b8bec6] p-2 sm:p-5 flex">
        {/* Sidebar - show/hide based on screen size and toggle state */}
        <div className={`${isMobile ? (isSidebarOpen ? 'absolute z-50 h-[calc(100vh-1rem)] left-2' : 'hidden') : 'relative'} ${isSidebarOpen ? 'w-80 md:w-80' : 'w-20'} bg-primary-100 rounded-l-lg transition-all duration-300 z-40`}>
          <LandingSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        
        {/* Overlay for mobile when sidebar is open */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
        
        {/* Main content area */}
        <main className={`bg-primary-100 overflow-y-auto scrollbar rounded-lg h-full flex-1 transition-all duration-300 ${isMobile && isSidebarOpen ? 'opacity-30' : 'opacity-100'}`}>
          <div className="page-container p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default LandingLayout;