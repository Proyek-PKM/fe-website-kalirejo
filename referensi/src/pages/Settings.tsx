import React, { useState } from "react";

const Settings: React.FC = () => {
  const [username, setUsername] = useState("Jasmine");
  const [email, setEmail] = useState("jasmine@example.com");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
