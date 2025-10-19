import "./DashboardLayout.css";
import "./Scrollbar/Scrollbar.css";
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <>
      <div className="h-[100vh] bg-[#b8bec6] p-5">
        <main className="bg-primary-100 overflow-y-auto scrollbar rounded-lg h-full">
          <div className="page-container p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default LandingLayout;