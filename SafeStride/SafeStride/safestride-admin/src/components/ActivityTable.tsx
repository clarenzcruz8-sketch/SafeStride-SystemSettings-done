function ActivityTable() {
  const rows = [
    { id: "#2847", user: "Alicia M.", avatar: "AM", action: "Created route", time: "2 min ago", status: "completed" },
    { id: "#2846", user: "Marcus T.", avatar: "MT", action: "Updated alert rule", time: "8 min ago", status: "in-progress" },
    { id: "#2845", user: "Nina R.", avatar: "NR", action: "Reported incident", time: "18 min ago", status: "completed" },
  ];

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Activity ID</th>
            <th>User</th>
            <th>Activity</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td><span className="activity-id">{row.id}</span></td>
              <td>
                <div className="user-cell">
                  <div className="table-avatar">{row.avatar}</div>
                  <span>{row.user}</span>
                </div>
              </td>
              <td>{row.action}</td>
              <td><span className="timestamp">{row.time}</span></td>
              <td>
                <span className={`status ${row.status}`}>
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1).replace("-", " ")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;
