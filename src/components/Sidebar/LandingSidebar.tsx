import { useLocation, useNavigate } from "react-router-dom";
import type { MenuType } from "../types/Sidebar.types";
import Icon from "../icon/Icon";

export default function LandingSidebar() {
  const menu_auth: MenuType[] = [
    {
      judul: "login/register",
      route: "/login",
      icon: "edit_note", // Using pencil/edit icon as requested
    },
  ];

  return (
    <>
      <div className="p-8 px-10 h-full">
        {/* wrapper */}
        <div className="flex flex-col gap-10 justify-between h-full ">
          <div className="mb-20">
            {/* header */}
            <header className="flex items-center gap-2 mb-16 mr-16">
              <img
                className="ml-[-15px] w-[3rem]"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F753%2Flogo-kabupaten-banyuwangi-png-3.png&f=1&nofb=1&ipt=be43c0b886e2cd492eb138db6d24aa8bc9c740f8b7bbb6e25a8772e331de191d"
                alt="oke"
              />
              <h1 className="text-2xl font-bold">Si Karjo App</h1>
            </header>
            {/* menu */}
            <main className="flex flex-col gap-5">
              <Menu title="" dataMenu={menu_auth} />
            </main>
          </div>
          {/* footer content */}
          {/* Footer removed as requested */}
        </div>
      </div>
    </>
  );
}

function Menu({ title, dataMenu }: { title: string; dataMenu: MenuType[] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.startsWith("/")
    ? location.pathname.slice(1)
    : location.pathname;
  const firstSegment = path.split("/")[0];

  return (
    <div className="select-none">
      {title && (
        <h3 className="text-[#7C7C7C] font-semibold text-base capitalize mb-5">
          {title}
        </h3>
      )}
      <ul className="flex flex-col gap-1">
        {dataMenu.map((item, index) => {
          const itemPath = item.route.startsWith("/")
            ? item.route.slice(1)
            : item.route;
          const itemFirstSegment = itemPath.split("/")[0];

          const isActive = firstSegment === itemFirstSegment;

          return (
            <li
              className={`
                flex 
                items-center 
                text-sm
                gap-3 
                py-3 px-7 
                cursor-pointer 
                rounded-lg 
                transition-all 
                select-none
                ${isActive ? "bg-menu-active-bg font-bold" : ""}
                ${item.judul === 'logout' ? 'text-logout-text' : 'text-slate-800'}
                hover:bg-menu-active-bg
              `}
              key={index}
              onClick={() => navigate(item.route)}
            >
              <Icon icon={item.icon} />
              <p
                className={`font-semibold capitalize m-0 ${item.judul === "logout" ? "text-logout-text" : ""}`}
              >
                {item.judul}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}