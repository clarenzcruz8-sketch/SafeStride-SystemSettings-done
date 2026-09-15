type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
};

function StatCard({
  title,
  value,
  change,
  icon,
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <strong className="stat-value">
        {value}
      </strong>

      <div className="stat-change">
        ↗ <strong>{change}</strong>
        <span>vs last month</span>
      </div>
    </div>
  );
}

export default StatCard;