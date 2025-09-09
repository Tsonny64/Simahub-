// src/app/admin/dashboard/page.js
export default function DashboardPage() {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="text-lg font-semibold">Total Products</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="p-4 bg-green-100 rounded shadow">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold">$15,000</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded shadow">
            <h3 className="text-lg font-semibold">New Users</h3>
            <p className="text-2xl font-bold">45</p>
          </div>
        </div>
      </div>
    );
  }
  