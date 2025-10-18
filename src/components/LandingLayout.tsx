import LandingSidebar from "../components/Sidebar/LandingSidebar";
import "../components/DashboardLayout.css";
import "../components/Scrollbar/Scrollbar.css";
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <>
      <div className="h-[100vh] bg-[#b8bec6] p-5">
        <section className="layout">
          <aside className="sidebar-container overflow-y-auto scrollbar">
            <LandingSidebar />
          </aside>
          <main className="bg-primary-100 overflow-y-auto scrollbar">
            <div className="page-container">
              <Outlet />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default LandingLayout;