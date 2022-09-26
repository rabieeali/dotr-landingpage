import CardSettings from "./Cards/CardSettings";
import Sidebar from "./Sidebar/Sidebar";
import AdminNavbar from "./Navbars/AdminNavbar";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="relative md:ml-64 h-screen bg-blueGray-100">
        <AdminNavbar />
        <div className="w-4/12 px-4">
          <Sidebar />
        </div>
        <div className="w-full pt-32 px-4">
          <CardSettings />
        </div>
      </div>
    </main>
  );
};

export default Layout;
