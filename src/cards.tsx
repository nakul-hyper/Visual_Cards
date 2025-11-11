import { EditIcon, SettingsIcon } from "./icons";
import { useState } from "react";

export function Card1() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-80 h-50 group">
      {/* Border */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-2xl"></div>

      {/* White background*/}
      <div className="absolute inset-0.5 bg-white rounded-2xl"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-2">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start">
            <h3 className=" p-1.5 text-xs font-semibold uppercase tracking-wider bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Total Users
            </h3>

            {/* Button */}
            <div className="flex gap-2">
              <button
                className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Edit card"
              >
                <EditIcon />
              </button>
              <button
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Card options"
              >
                <SettingsIcon />
              </button>
            </div>
          </div>
          {/*Line*/}
          <div className="h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-4 top-12 bg-white rounded-xl shadow-2xl p-2 w-60 z-50 border border-gray-200">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-blue-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-blue-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Remove from Dashboard</span>
            </button>
            <div className="h-px bg-gray-200 my-1"></div>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg text-red-600 text-sm font-medium transition-all duration-150">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        {/* Main Value Display */}
        <div className="flex-1 flex flex-col justify-center items-center mb-4">
          <div className="relative ">
            <p className=" text-5xl font-bold bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent tracking-tight">
              126,285
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card2() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-80 h-50 group overflow-hidden rounded-2xl shadow-xl">
      {/* Orange background */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-orange-500 to-orange-700"></div>

      {/* Decorative circle shapes in top left */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/10 rounded-full"></div>
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/15 rounded-full"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 justify-center items-center">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <h3 className="text-white text-xs font-semibold uppercase tracking-wider">
            Revenue
          </h3>

          {/* Button */}
          <div className="flex gap-2">
            <button
              className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Edit card"
            >
              <EditIcon />
            </button>
            <button
              className="text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Card options"
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-4 top-12 bg-white rounded-xl shadow-2xl p-2 w-60 z-50 border border-gray-200">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-orange-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-orange-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Remove from Dashboard</span>
            </button>
            <div className="h-px bg-gray-200 my-1"></div>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg text-red-600 text-sm font-medium transition-all duration-150">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        {/* Main Value Display */}
        <div className="relative">
          <p className="text-5xl font-bold text-white tracking-tight drop-shadow-lg">
            $45,892
          </p>
        </div>
      </div>
    </div>
  );
}

export function Card3() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-80 h-50 group">
      {/* Gradient background - Navy to Slate */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl shadow-xl"></div>

      {/* Subtle accent line on left */}
      <div className="absolute left-0 top-8 bottom-8 w-1 bg-linear-to-b from-cyan-400 via-blue-400 to-indigo-400 rounded-r-full"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-4">
        {/* Header - Absolute positioning */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div>
            <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              Active Projects
            </h3>
            <div className="h-0.5 w-16 bg-linear-to-r from-cyan-400 to-transparent"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Edit card"
            >
              <EditIcon />
            </button>
            <button
              className="text-slate-300 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Card options"
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-4 top-14 bg-white rounded-xl shadow-2xl p-2 w-60 z-50 border border-gray-200">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Remove from Dashboard</span>
            </button>
            <div className="h-px bg-gray-200 my-1"></div>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg text-red-600 text-sm font-medium transition-all duration-150">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        {/* Main Content - Centered */}
        <p className="text-7xl font-bold text-white tracking-tight">248</p>
      </div>
    </div>
  );
}

export function Card4() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative w-80 h-50 group">
      {/* Dark background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-4">
        {/* Buttons - Absolute positioning */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Edit card"
          >
            <EditIcon />
          </button>
          <button
            className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Card options"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-4 top-14 bg-white rounded-xl shadow-2xl p-2 w-60 z-50 border border-gray-200">
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Schedule report to mail</span>
            </button>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-all duration-150">
              <span>Remove from Dashboard</span>
            </button>
            <div className="h-px bg-gray-200 my-1"></div>
            <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg text-red-600 text-sm font-medium transition-all duration-150">
              <span>Delete Globally</span>
            </button>
          </div>
        )}

        {/* Main Content - Number on top, text below */}
        <div className="flex flex-col items-center">
          <p className="text-7xl font-bold text-white mb-4 tracking-tight">
            220
          </p>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <h3 className="text-white text-sm font-semibold">Messages</h3>
          </div>
        </div>
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
