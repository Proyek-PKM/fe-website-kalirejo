// import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import "./DashboardLayout.css";
import "./Scrollbar/Scrollbar.css";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="h-[100vh] bg-[#b8bec6] p-5">
        <section className="layout">
          <aside className="scrollside overflow-y-auto">
            <Sidebar />
          </aside>
          <main className="bg-[#EEFFFB] overflow-y-auto scrollbar">
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
}

export default DashboardLayout;
