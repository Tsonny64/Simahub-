import AdminSidebar from '../../components/AdminSidebar';
import AdminHeader from '../../components/AdminHeader';
import AdminFooter from './Adminfooter'; // Assuming this is your Admin Footer

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>

        {/* Admin Footer */}
        <AdminFooter />
      </div>
    </div>
  );
}
