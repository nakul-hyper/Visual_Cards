import { EditIcon, SettingsIcon } from "./icons";
import { useState } from "react";

export function Card1() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-blue-300 via-blue-500 to-blue-800 rounded-lg border-2 border-blue-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white text-sm font-medium uppercase">
          Total Users
        </h3>
        <div className="flex gap-2">
          <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <EditIcon />
          </button>
          <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Schedule report to mail</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Remove from Dashboard</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
            <span>Delete Globally</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center flex-1">
        <p className="text-5xl font-bold text-white">126,285</p>
      </div>
    </div>
  );
}

export function Card2() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-emerald-300 via-emerald-500 to-emerald-800 rounded-lg border-2 border-emerald-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white text-sm font-medium uppercase">Revenue</h3>
        <div className="flex gap-2">
          <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <EditIcon />
          </button>
          <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Schedule report to mail</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Remove from Dashboard</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
            <span>Delete Globally</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold text-white">$45,892</p>
      </div>
    </div>
  );
}

export function Card3() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-purple-300 via-purple-500 to-purple-800 rounded-lg border-2 border-purple-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white text-sm font-medium uppercase">
          Active Projects
        </h3>
        <div className="flex gap-2">
          <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <EditIcon />
          </button>
          <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Schedule report to mail</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Remove from Dashboard</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
            <span>Delete Globally</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold text-white">248</p>
      </div>
    </div>
  );
}

export function Card4() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-orange-300 via-orange-500 to-orange-800 rounded-lg border-2 border-orange-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white text-sm font-medium uppercase">
          Conversion Rate
        </h3>
        <div className="flex gap-2">
          <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <EditIcon />
          </button>
          <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Schedule report to mail</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Remove from Dashboard</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
            <span>Delete Globally</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold text-white">3.24%</p>
      </div>
    </div>
  );
}

// Card 5 - Glass morphism style with diagonal stripes
export function Card5() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-6 group w-80 h-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-rose-600/20"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
        }}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-white text-sm font-medium uppercase">
            Bounce Rate
          </h3>
          <div className="flex gap-2">
            <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <EditIcon />
            </button>
            <button
              className="text-white"
              onClick={() => setShowMenu(!showMenu)}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Remove from Dashboard</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        <div className="flex items-center justify-center">
          <p className="text-5xl font-bold text-white drop-shadow-lg">42.8%</p>
        </div>
      </div>
    </div>
  );
}

// Card 6 - Solid dark with neon border
export function Card6() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-gray-900 rounded-2xl border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
          Page Views
        </h3>
        <div className="flex gap-2">
          <button className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <EditIcon />
          </button>
          <button
            className="text-cyan-400"
            onClick={() => setShowMenu(!showMenu)}
          >
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Schedule report to mail</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
            <span>Remove from Dashboard</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
            <span>Delete Globally</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold text-cyan-400">892,456</p>
      </div>
    </div>
  );
}

// Card 7 - Dotted pattern with double border
export function Card7() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-indigo-600 to-indigo-900 rounded-lg border-4 border-double border-indigo-300 shadow-lg p-6 group w-80 h-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-white text-sm font-medium uppercase">
            Session Time
          </h3>
          <div className="flex gap-2">
            <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <EditIcon />
            </button>
            <button
              className="text-white"
              onClick={() => setShowMenu(!showMenu)}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Remove from Dashboard</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        <div className="flex items-center justify-center">
          <p className="text-5xl font-bold text-white">4m 32s</p>
        </div>
      </div>
    </div>
  );
}

// Card 8 - Gradient border with white background
export function Card8() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-80 h-50 group">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400 via-red-500 to-pink-500 rounded-xl"></div>
      <div className="absolute inset-[3px] bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-gray-800 text-sm font-bold uppercase">
            New Signups
          </h3>
          <div className="flex gap-2">
            <button className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <EditIcon />
            </button>
            <button
              className="text-gray-600"
              onClick={() => setShowMenu(!showMenu)}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="absolute right-6 top-14 bg-white rounded-lg shadow-xl p-3 w-64 z-10 border border-gray-200">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
              <span>Remove from Dashboard</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-gray-400 text-sm">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        <div className="flex items-center justify-center">
          <p className="text-5xl font-bold bg-linear-to-br from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            1,234
          </p>
        </div>
      </div>
    </div>
  );
}
