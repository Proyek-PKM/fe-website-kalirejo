import { Link, Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="min-h-screen w-screen bg-[#b8bec6] p-5">
        <section className="grid grid-cols-[auto_1fr] h-[calc(100vh-40px)] w-full cursor-default rounded-2xl overflow-hidden">
          {/* Sidebar */}
          <aside className="flex w-[13vw] flex-col justify-between gap-10 bg-white p-7 overflow-y-auto">
            <div className="flex flex-col justify-between gap-10">
              <h1 className="mb-2 text-[1rem] font-semibold capitalize">
                Si Karjo
              </h1>
              <div>
                <h1 className="mb-6 text-[1rem] font-medium text-[#8a8a8a] capitalize">
                  overview
                </h1>
                <ul className="flex flex-col gap-7">
                  <li>
                    <Link
                      to="/"
                      className="ease flex items-center gap-5 font-bold capitalize transition duration-100 hover:text-[#6b6b6b]"
                    >
                      <span className="material-symbols-rounded text-blue-400">
                        dashboard
                      </span>
                      dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/laporan"
                      className="ease flex items-center gap-5 font-bold capitalize transition duration-100 hover:text-[#6b6b6b]"
                    >
                      <span className="material-symbols-rounded">inbox</span>
                      laporan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/informasi-desa"
                      className="ease flex items-center gap-5 font-bold capitalize transition duration-100 hover:text-[#6b6b6b]"
                    >
                      <span className="material-symbols-rounded">
                        holiday_village
                      </span>
                      informasi desa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/riwayat-pesan"
                      className="ease flex items-center gap-5 font-bold capitalize transition duration-100 hover:text-[#6b6b6b]"
                    >
                      <span className="material-symbols-rounded">message</span>
                      Riwayat Pesan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/log-realtime"
                      className="ease flex items-center gap-5 font-bold capitalize transition duration-100 hover:text-[#6b6b6b]"
                    >
                      <span className="material-symbols-rounded">
                        browse_activity
                      </span>
                      log realtime
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-6 text-[1rem] font-medium text-[#8a8a8a] capitalize">
                  admin
                </h1>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-5 leading-[1.2rem] font-bold capitalize">
                    <div className="flex items-center rounded-full bg-[#f1f1f1] p-1.5">
                      <span className="material-symbols-rounded">person</span>
                    </div>
                    <div className="flex flex-col">
                      Pak Joko
                      <span className="text-[10px] text-[#b6b6b6]">
                        head admin
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-5 leading-[1.2rem] font-bold capitalize">
                    <div className="flex items-center rounded-full bg-[#f1f1f1] p-1.5">
                      <span className="material-symbols-rounded">person</span>
                    </div>
                    <div className="flex flex-col">
                      Mas Andi
                      <span className="text-[10px] text-[#b6b6b6]">
                        moderator
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="mb-6 text-[1rem] font-medium text-[#8a8a8a] capitalize">
                settings
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 font-bold cursor-pointer">
                  <span className="material-symbols-rounded">settings</span>
                  settings
                </div>
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-3 font-bold text-red-600 cursor-pointer"
                >
                  <span className="material-symbols-rounded">logout</span>
                  logout
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-[#f6f8fc] p-7 overflow-y-auto h-full">
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
}

export default DashboardLayout;
