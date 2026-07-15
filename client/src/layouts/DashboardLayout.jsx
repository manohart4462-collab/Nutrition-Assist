import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}