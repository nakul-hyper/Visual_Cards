import { EditIcon, SettingsIcon } from "./icons";
import { useState } from "react";

export function Card1() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-lg border-2 border-blue-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-4">
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

      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">126,285</p>
        </div>
        <div className="text-white/30 text-5xl">👥</div>
      </div>
    </div>
  );
}

export function Card2() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg border-2 border-emerald-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-4">
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

      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">$45,892</p>
        </div>
        <div className="text-white/30 text-5xl">💰</div>
      </div>
    </div>
  );
}

export function Card3() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-lg border-2 border-purple-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-4">
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

      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">248</p>
        </div>
        <div className="text-white/30 text-5xl">📊</div>
      </div>
    </div>
  );
}

export function Card4() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-lg border-2 border-orange-700 shadow-lg p-6 group w-80 h-50 relative">
      <div className="flex justify-between items-start mb-4">
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

      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">3.24%</p>
        </div>
        <div className="text-white/30 text-5xl">📈</div>
      </div>
    </div>
  );
}
