import {
  FaHome,
  FaFire,
  FaMusic,
  FaGamepad,
  FaNewspaper,
  FaFootballBall,
  FaGraduationCap,
} from "react-icons/fa";

const categories = [
  { name: "Home", icon: <FaHome /> },
  { name: "Trending", icon: <FaFire /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "News", icon: <FaNewspaper /> },
  { name: "Sports", icon: <FaFootballBall /> },
  { name: "Education", icon: <FaGraduationCap /> },
];

export default function Sidebar({ sidebarMode }) {
  if (sidebarMode === "hidden") return null; // completely hidden

  return (
    <aside
      className={`fixed top-0 left-0 h-full ${
        sidebarMode === "expanded" ? "w-64" : "w-20"
      } bg-white border-r shadow-lg transition-all duration-300 ease-in-out z-40
        md:translate-x-0 md:static md:shadow-none`}
    >
      <div className="p-6">
        {sidebarMode === "expanded" && (
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
        )}
        <ul className="space-y-4">
          {categories.map(({ name, icon }) => (
            <li
              key={name}
              className="flex items-center space-x-3 cursor-pointer hover:text-red-600 text-gray-800"
            >
              <span className="text-2xl">{icon}</span>
              {sidebarMode === "expanded" && <span>{name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
