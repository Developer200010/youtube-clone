import React from 'react';

export default function Header({ user, onSignIn }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow sticky top-0 z-50">
      {/* YouTube Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
          alt="YouTube Logo" 
          className="h-8"
        />

      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-full">
          Search
        </button>
      </div>

      {/* User Section */}
      <div>
        {user ? (
          <span className="text-gray-700 font-semibold">{user.username}</span>
        ) : (
          <button
            onClick={onSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
