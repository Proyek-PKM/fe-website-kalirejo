const Login = () => {
  // todo request dan kirim ke /login-request untuk cek validasi apakah user adalah admin
  // apabila admin maka akan melakukan validasi
  // dan akan ngereturn { "isAdmin": true }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://ephemeral.desakalirejo.id/test", {
      method: "POST",
      body: JSON.stringify({
        test: "oke",
      }),
    });
    console.log(res.status);
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="bg-slate-100 p-5 rounded-xl max-w-2xl w-full mx-auto">
        <h1 className="font-bold mb-5">Login</h1>
        <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
          <label className="font-bold">Nomor Hp</label>
          <input
            className="p-2 rounded focus:outline-none placeholder:capitalize"
            type="text"
            placeholder="input nomor hp"
          />
          <input
            type="submit"
            className="bg-slate-300 rounded p-2 font-bold text-slate-700 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
