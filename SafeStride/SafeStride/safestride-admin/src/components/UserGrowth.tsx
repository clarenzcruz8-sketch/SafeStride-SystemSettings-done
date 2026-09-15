function UserGrowth() {
  return (
    <div className="panel growth-panel">
      <div className="panel-header">
        <div>
          <h2>User Growth</h2>
          <p>Daily registered users trend</p>
        </div>

        <div className="chart-tabs">
          <button className="selected">7D</button>
          <button>30D</button>
          <button>90D</button>
        </div>
      </div>

      <div className="chart">
        <div className="y-axis">
          <span>7,500</span>
          <span>7,000</span>
          <span>6,500</span>
          <span>6,000</span>
          <span>5,500</span>
          <span>5,000</span>
          <span>4,500</span>
          <span>4,000</span>
          <span>3,500</span>
        </div>

        <div className="chart-area">
          <div className="grid-lines">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <svg
            className="growth-svg"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="chartFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ff7818"
                  stopOpacity=".35"
                />
                <stop
                  offset="100%"
                  stopColor="#ff7818"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M0 200
                 C35 215, 50 235, 80 245
                 C110 255, 130 250, 150 200
                 C175 130, 190 110, 220 125
                 C250 140, 270 170, 300 175
                 C330 180, 350 160, 380 125
                 C410 90, 435 80, 460 100
                 C485 120, 510 135, 535 120
                 C565 105, 580 60, 600 25
                 L600 300
                 L0 300 Z"
              fill="url(#chartFill)"
            />

            <path
              d="M0 200
                 C35 215, 50 235, 80 245
                 C110 255, 130 250, 150 200
                 C175 130, 190 110, 220 125
                 C250 140, 270 170, 300 175
                 C330 180, 350 160, 380 125
                 C410 90, 435 80, 460 100
                 C485 120, 510 135, 535 120
                 C565 105, 580 60, 600 25"
              fill="none"
              stroke="#ff7818"
              strokeWidth="4"
            />
          </svg>

          <div className="x-axis">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGrowth;