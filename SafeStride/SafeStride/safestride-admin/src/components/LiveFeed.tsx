function LiveFeed() {
  const feed = [
    {
      name: "Elena Vance",
      text: "completed a 10km Run",
      location: "WESTSIDE TRAIL",
      time: "2 mins ago",
      type: "green",
    },
    {
      name: "Marcus Wright",
      text: "started a Cycling session",
      location: "URBAN LOOP",
      time: "12 mins ago",
      type: "green",
    },
    {
      name: "Alex Rivera",
      text: "reached daily step goal (12k)",
      location: "ATHLETE: ALEX",
      time: "45 mins ago",
      type: "green",
    },
    {
      name: "Unusual heart rate spike",
      text: "",
      location: "",
      time: "1 hour ago",
      type: "orange",
    },
  ];

  return (
    <div className="panel feed-panel">
      <div className="feed-header">
        <h2>LIVE USER FEED</h2>
        <span>REAL-TIME</span>
      </div>

      <div className="feed-list">
        {feed.map((item, index) => (
          <div className="feed-item" key={index}>
            <div className={`feed-dot ${item.type}`} />

            <div className="feed-content">
              <div className="feed-title">
                <strong>{item.name}</strong>

                {item.text && <span>{item.text}</span>}
              </div>

              {item.location && (
                <small>{item.location}</small>
              )}

              <div className="feed-time">
                ◷ {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveFeed;