import React, { useState, useEffect } from "react";
import { FaHome, FaFire, FaMusic, FaGamepad, FaNewspaper, FaFootballBall, FaGraduationCap, FaTimes } from "react-icons/fa";

const categories = [
  { name: "Home", icon: <FaHome /> },
  { name: "Trending", icon: <FaFire /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "News", icon: <FaNewspaper /> },
  { name: "Sports", icon: <FaFootballBall /> },
  { name: "Education", icon: <FaGraduationCap /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  // Close sidebar on window resize under 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button on smaller devices */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded bg-white shadow"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaHome size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <ul className="space-y-4">
            {categories.map(({ name, icon }) => (
              <li
                key={name}
                className="flex items-center space-x-3 cursor-pointer hover:text-red-600 text-gray-800"
              >
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
