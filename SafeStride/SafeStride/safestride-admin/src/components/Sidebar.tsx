import {
  LayoutDashboard,
  UserRound,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";


type SidebarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div>
        <div className="logo">
          <div className="logo-icon">
            <ShieldCheck size={17} />
          </div>

          <span>SafeStride</span>
        </div>

        {/* NAVIGATION */}
        <nav className="sidebar-nav">

          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <LayoutDashboard size={17} />
            <span>Dashboard Overview</span>
          </button>

          <button
            className={activePage === "users" ? "active" : ""}
            onClick={() => setActivePage("users")}
          >
            <UserRound size={18} />
            <span>User Management</span>
          </button>

          <button
            className={activePage === "settings" ? "active" : ""}
            onClick={() => setActivePage("settings")}
          >
            <Settings size={18} />
            <span>System Settings</span>
          </button>

        </nav>
      </div>

      {/* SIGN OUT */}
      <button className="sign-out">
        <LogOut size={17} />
        <span>Sign Out</span>
      </button>

    </aside>
  );
}

export default Sidebar;