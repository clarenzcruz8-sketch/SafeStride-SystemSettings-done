import {
  Download,
  Filter,
  Home,

  Search,
  Users,
  Zap,
} from "lucide-react";
import StatCard from "../components/StatCard";
import LiveFeed from "../components/LiveFeed";
import UserGrowth from "../components/UserGrowth";
import DeviceDistribution from "../components/DeviceDistribution";
import ActivityTable from "../components/ActivityTable";


function Dashboard() {
  return (
    <div className="content">

      {/* PAGE TITLE */}
      <section className="page-heading">
        <div className="home-icon">
          <Home size={20} />
        </div>

        <div>
          <h1>Overview</h1>

          <div className="breadcrumb">
            <span>SafeStride</span>
            <b>/</b>
            <span>Admin Dashboard</span>
            <b>/</b>
            <strong>overview</strong>
          </div>
        </div>
      </section>

      {/* DASHBOARD GRID */}
      <section className="dashboard-grid">

        <StatCard
          title="TOTAL USERS"
          value="124,592"
          change="+12.5%"
          icon={<Users size={19} />}
        />

        <StatCard
          title="ACTIVE USERS"
          value="8,241"
          change="+4.2%"
          icon={<Zap size={19} />}
        />

        <LiveFeed />

        <UserGrowth />

        <DeviceDistribution />

      </section>

      {/* HEATMAP */}
      <section className="panel heatmap-panel">
        <div className="panel-header">
          <div>
            <h2>Live Heatmap</h2>
            <p>User Density Tracker</p>
          </div>

          <button className="small-button">
            Open Map
          </button>
        </div>

        <div className="heatmap">
          <div className="heatmap-glow glow-one"></div>
          <div className="heatmap-glow glow-two"></div>
          <div className="heatmap-glow glow-three"></div>

          <div className="map-controls">
            <button>+</button>
            <button>−</button>
          </div>
        </div>
      </section>

      {/* RECENT ACTIVITIES */}
      <section className="panel activities-panel">

        <div className="activities-header">

          <div>
            <h2>Recent Activities</h2>
            <p>Latest system-wide user logs</p>
          </div>

          <div className="activity-actions">

            <div className="filter-search">
              <Search size={15} />
              <input placeholder="Filter reports..." />
            </div>

            <button className="outline-button">
              <Filter size={15} />
              Filter
            </button>

            <button className="outline-button">
              <Download size={15} />
              Export
            </button>

          </div>

        </div>

        <ActivityTable />

      </section>

    </div>
  );
}

export default Dashboard;