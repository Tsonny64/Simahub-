// src/components/AdminHeader.js
export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    </header>
  );
}
