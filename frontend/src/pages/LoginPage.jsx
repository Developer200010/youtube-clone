// LoginPage.jsx
export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="font-bold text-xl mb-2">Login</h2>
      <form>
        <input className="w-full mb-2 p-2 border rounded" placeholder="Email" />
        <input className="w-full mb-2 p-2 border rounded" placeholder="Password" type="password" />
        <button className="w-full p-2 bg-red-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}
