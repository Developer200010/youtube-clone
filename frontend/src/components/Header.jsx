import { useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ user = false, sidebarMode, setSidebarMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    if (sidebarMode === "expanded") {
      setSidebarMode("collapsed");
    } else {
      setSidebarMode("expanded");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow sticky top-0 z-50 h-16">
      {/* Hamburger */}
      <div className="flex items-center gap-2">
        <span
          className="font-bold text-2xl hover:cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaBars />
        </span>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-6 mr-2 hover:cursor-pointer"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="flex flex-grow max-w-2xl mx-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white rounded-r-full px-4">
          <FaSearch />
        </button>
      </div>

      {/* User Section */}
      <div>
        {user ? (
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src={user.avatar || "/default-avatar.png"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-gray-800">{user.username}</span>
          </div>
        ) : (
          <Link to="/register">
            <button className="text-sm border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
              <FaUserCircle className="inline mr-1 mb-1" />
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
