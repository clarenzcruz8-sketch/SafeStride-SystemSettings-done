import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      <div className="search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search users, reports, incidents..."
        />
      </div>

      <div className="topbar-right">

        <div className="system-status">
          <span></span>
          SYSTEM LIVE
        </div>

        <button className="icon-button">
          <Bell size={18} />
        </button>

        <div className="admin-profile">
          <div>
            <strong>Rayley Calderon</strong>
            <small>System Admin</small>
          </div>

          <div className="admin-avatar">
            RC
          </div>

          <ChevronDown size={16} />
        </div>

      </div>
    </header>
  );
}

export default Topbar;