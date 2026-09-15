function DeviceDistribution() {
  return (
    <div className="panel device-panel">
      <div className="panel-header">
        <div>
          <h2>Device Distribution</h2>
          <p>Active hardware sessions</p>
        </div>
      </div>
      <div className="donut-container">
        <div className="donut">
          <div className="donut-center"></div>
        </div>
      </div>
      <div className="legend">
        <span>
          <i className="android"></i>
          Android
        </span>
        <span>
          <i className="other"></i>
          Other
        </span>
        <span>
          <i className="ios"></i>
          iOS
        </span>
      </div>
    </div>
  );
}

export default DeviceDistribution;
