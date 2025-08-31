import { useState } from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Header({ onToggleSidebar, user, onSignIn }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow sticky top-0 z-50 h-16">
      {/* Hamburger icon */}
      <button
        onClick={onToggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-200"
        aria-label="Toggle sidebar"
      >
        <FaBars className="w-6 h-6 text-gray-700" />
      </button>

      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-8 mr-2"
        />
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
            <img src={user.avatar || "/default-avatar.png"} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-gray-800">{user.username}</span>
          </div>
        ) : (
          <button
            onClick={onSignIn}
            className="text-sm border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition"
          >
            <FaUserCircle className="inline mr-1 mb-1" />
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
