import {
  X,
  CalendarDays,
  Clock,
  Mail,
  Trophy,
} from "lucide-react";

import "../styles/UserManagement.css";

type User = {
  name: string;
  email: string;
  initials: string;
  status: string;
  level: string;
};

type UserDataProps = {
  user: User;
  onClose: () => void;
};

function UserData({ user, onClose }: UserDataProps) {
  return (
    <div className="user-details-panel">

      {/* CLOSE BUTTON */}
      <button
        className="user-close"
        onClick={onClose}
      >
        <X size={20} />
      </button>

      {/* USER HEADER */}
      <div className="user-details-top">

        <div className="user-details-avatar">
          {user.initials}
        </div>

        <div className="user-details-info">
          <h2>{user.name}</h2>

          <span className="user-id">
            ATH-001
          </span>
        </div>

      </div>

      {/* BASIC INFORMATION */}
      <div className="user-meta">

        <div className="user-meta-item">
          <CalendarDays size={15} />

          <span>
            <small>Joined</small>
            2023-11-12
          </span>
        </div>

        <div className="user-meta-item">
          <Clock size={15} />

          <span>
            <small>Last Active</small>
            2 hours ago
          </span>
        </div>

      </div>

      <div className="user-divider" />

      {/* BIO */}
      <section className="details-section">

        <h3 className="details-section-title">
          PROFESSIONAL BIO & NOTES
        </h3>

        <div className="bio-box">
          "Long-distance runner focusing on endurance
          and trail running. Prefers morning sessions."
        </div>

      </section>

      {/* ACHIEVEMENTS + CONTACT */}
      <div className="details-grid">

        {/* ACHIEVEMENTS */}
        <section className="details-section">

          <h3 className="details-column-title">
            <Trophy size={14} />
            ACHIEVEMENTS
          </h3>

          <div className="achievement-list">

            <span className="achievement">
              <span className="achievement-dot" />
              Early Bird
            </span>

            <span className="achievement">
              <span className="achievement-dot" />
              Safe Runner
            </span>

            <span className="achievement">
              <span className="achievement-dot" />
              500 Mile Club
            </span>

          </div>

        </section>

        {/* CONTACT */}
        <section className="details-section">

          <h3 className="details-column-title">
            <Mail size={14} />
            CONTACT INFORMATION
          </h3>

          <div className="contact-box">

            <small className="contact-label">
              PRIMARY EMAIL
            </small>

            <span className="contact-value">
              {user.email}
            </span>

          </div>

        </section>

      </div>

      {/* ACTIVE HOURS */}
      <section className="active-hours">

        <div className="active-hours-header">

          <h3 className="active-hours-title">
            <Clock size={14} />
            ACTIVE HOURS MONITORING
          </h3>

          <small className="active-hours-note">
            System recorded for last 24h
          </small>

        </div>

        <div className="hours-chart">

          <div
            className="hour-bar orange"
            style={{ height: "56%" }}
          />

          <div
            className="hour-bar brown"
            style={{ height: "72%" }}
          />

          <div
            className="hour-bar orange"
            style={{ height: "48%" }}
          />

          <div
            className="hour-bar brown"
            style={{ height: "80%" }}
          />

          <div
            className="hour-bar orange"
            style={{ height: "64%" }}
          />

          <div
            className="hour-bar brown"
            style={{ height: "90%" }}
          />

        </div>

      </section>

    </div>
  );
}

export default UserData;