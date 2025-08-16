import { useLocation, useNavigate } from "react-router-dom";
import type { MenuType } from "../types/Sidebar.types";
import Icon from "../icon/Icon";

export default function Sidebar() {
  const menu_overview: MenuType[] = [
    {
      judul: "dashboard",
      route: "/informasi-desa",
      icon: "dashboard",
    },
    {
      judul: "laporan",
      route: "/laporan",
      icon: "breaking_news",
    },
    {
      judul: "informasi desa",
      route: "/",
      icon: "holiday_village",
    },
    {
      judul: "log aplikasi",
      route: "/",
      icon: "terminal",
    },
  ];

  const menu_other: MenuType[] = [
    {
      judul: "edit informasi desa",
      route: "/",
      icon: "edit",
    },
    {
      judul: "changelog",
      route: "/",
      icon: "app_badging",
    },
  ];

  const menu_settings: MenuType[] = [
    {
      judul: "pengaturan",
      route: "/",
      icon: "settings",
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
              {/* overview */}
              <Menu title="overview" dataMenu={menu_overview} />

              {/* other */}
              <Menu title="other" dataMenu={menu_other} />
              <Menu title="settings" dataMenu={menu_settings} />
            </main>
          </div>
          {/* footer content */}
          <footer className="mb-1">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-3">
                <img
                  className="h-10 w-10 object-cover rounded-full cursor-pointer"
                  src="https://i.kym-cdn.com/photos/images/original/003/108/992/ba7.jpg"
                  alt="saori"
                />
                <div className="select-none">
                  <h3 className="font-semibold text-sm">Saori Araki</h3>
                  <p className="text-xs">Administrator</p>
                </div>
              </div>
              <div className="text-red-700 font-semibold cursor-pointer text-sm transition-all hover:text-red-900">
                <Icon icon="logout" />
              </div>
            </div>
          </footer>
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
      <h3 className="text-[#7C7C7C] font-semibold text-base capitalize mb-5">
        {title}
      </h3>
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
                ${isActive ? "bg-[#d5fff7] font-bold" : ""}
                hover:bg-[#effffd]
              `}
              key={index}
              onClick={() => navigate(item.route)}
            >
              <Icon icon={item.icon} />
              <p className="font-semibold capitalize">{item.judul}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
