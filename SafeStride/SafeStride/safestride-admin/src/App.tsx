
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import SystemSettings from "./pages/SystemSettings";


function App() {
    
    const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className="app">
      

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />
      {/* MAIN */}
      <main className="main">
       <Topbar />

         {activePage === "dashboard" && <Dashboard />}
        {activePage === "users" && <UserManagement />}
        {activePage === "settings" && <SystemSettings />}
      </main>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */





// function DeviceDistribution() {
//   return (
//     <div className="panel device-panel">
//       <div className="panel-header">
//         <div>
//           <h2>Device Distribution</h2>
//           <p>Active hardware sessions</p>
//         </div>
//       </div>

//       <div className="donut-container">
//         <div className="donut">
//           <div className="donut-center"></div>
//         </div>
//       </div>

//       <div className="legend">
//         <span>
//           <i className="android"></i>
//           Android
//         </span>

//         <span>
//           <i className="other"></i>
//           Other
//         </span>

//         <span>
//           <i className="ios"></i>
//           iOS
//         </span>
//       </div>
//     </div>
//   );
// }

// function ActivityTable() {
//   const activities = [
//     ["ACT-7721", "Alex Rivera", "Cycling", "Coastal Path", "2024-05-05 14:22", "COMPLETED"],
//     ["ACT-7722", "Jordan Smith", "Running", "Park Loop", "2024-05-05 13:45", "IN PROGRESS"],
//     ["ACT-7723", "Elena Vance", "Walking", "Hill Estate", "2024-05-05 12:10", "COMPLETED"],
//     ["ACT-7724", "Marcus Wright", "Cycling", "Velodrome", "2024-05-05 11:30", "PAUSED"],
//     ["ACT-7725", "Sarah Connor", "Hiking", "East Trail", "2024-05-05 10:15", "COMPLETED"],
//   ];

//   return (
//     <div className="table-wrapper">
//       <table>
//         <thead>
//           <tr>
//             <th>ACTIVITY ID</th>
//             <th>USER</th>
//             <th>SPORT TYPE</th>
//             <th>ROUTE / AREA</th>
//             <th>TIMESTAMP</th>
//             <th>STATUS</th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody>
//           {activities.map((activity) => (
//             <tr key={activity[0]}>
//               <td className="activity-id">{activity[0]}</td>

//               <td>
//                 <div className="user-cell">
//                   <div className="table-avatar">
//                     {activity[1][0]}
//                   </div>

//                   {activity[1]}
//                 </div>
//               </td>

//               <td>{activity[2]}</td>
//               <td>{activity[3]}</td>

//               <td className="timestamp">
//                 {activity[4]}
//               </td>

//               <td>
//                 <span
//                   className={`status ${activity[5]
//                     .toLowerCase()
//                     .replace(" ", "-")}`}
//                 >
//                   {activity[5]}
//                 </span>
//               </td>

//               <td>
//                 <MoreHorizontal size={18} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <span>Showing 1 to 5 of 142 reports</span>

//         <div>
//           <button>Previous</button>
//           <button>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LogOutIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" y1="12" x2="9" y2="12" />
//     </svg>
//   );
// }

export default App;