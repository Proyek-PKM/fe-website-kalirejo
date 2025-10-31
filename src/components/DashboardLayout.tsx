import Sidebar from "./Sidebar/Sidebar";
import "./DashboardLayout.css";
import "./Scrollbar/Scrollbar.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from "./icon/Icon";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On mobile, set sidebar to closed by default
      if (mobile) {
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
    <div className="h-[100vh] bg-[#b8bec6] p-2 sm:p-5 flex">
      {/* Desktop layout - sidebar with rounded left corners, main content with rounded right corners */}
      {!isMobile && (
        <div className="flex flex-1">
          {/* Sidebar - rounded on left side */}
          {isSidebarOpen && (
            <div className="relative w-80 bg-primary-100 rounded-l-lg overflow-hidden">
              <Sidebar />
            </div>
          )}
          
          {/* Main content area - rounded on right side */}
          <main className="bg-primary-100 overflow-y-auto scrollbar h-full flex-1 rounded-r-lg">
            <div className="page-container h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center w-full overflow-x-hidden">
                  <div className="page-container p-4 sm:p-6 w-full max-w-7xl">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* Mobile layout */}
      {isMobile && (
        <>
          {/* Mobile sidebar overlay */}
          {isSidebarOpen && (
            <>
              {/* Overlay - closes sidebar when clicked */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleSidebar}
              ></div>
              
              {/* Mobile sidebar - positioned absolutely with higher z-index */}
              <div className="fixed left-2 top-2 h-[calc(100vh-1rem)] w-80 bg-primary-100 rounded-lg z-50">
                <Sidebar />
              </div>
            </>
          )}
          
          {/* Main content area for mobile */}
          <main className={`bg-primary-100 overflow-y-auto scrollbar rounded-lg h-full flex-1 transition-all duration-300 ${isSidebarOpen ? 'opacity-30' : 'opacity-100'}`}>
            <div className="page-container h-full flex flex-col">
              {/* Mobile menu button - shown only on mobile screens with higher z-index */}
              <div className="p-4 md:hidden mb-4 flex justify-start">
                <button 
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg bg-gray-200 text-gray-800 z-50 relative"
                  aria-label="Toggle menu"
                >
                  <Icon icon="menu" />
                </button>
              </div>
              
              {/* Content area - centered like landing page */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center w-full overflow-x-hidden">
                  <div className="page-container p-4 sm:p-6 w-full max-w-7xl">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default DashboardLayout;