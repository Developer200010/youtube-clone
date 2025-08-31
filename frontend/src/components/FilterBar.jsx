export default function FilterBar() {
  return (
    <div className="flex space-x-2 p-4 bg-white border-b sticky top-16 z-40">
      <button className="px-4 py-1 rounded bg-gray-200">All</button>
      <button className="px-4 py-1 rounded bg-gray-100">Music</button>
      <button className="px-4 py-1 rounded bg-gray-100">Gaming</button>
      <button className="px-4 py-1 rounded bg-gray-100">News</button>
      <button className="px-4 py-1 rounded bg-gray-100">Sports</button>
      <button className="px-4 py-1 rounded bg-gray-100">Education</button>
    </div>
  );
}
