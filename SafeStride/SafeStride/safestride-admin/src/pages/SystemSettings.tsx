import { useState } from "react";
import {
  Settings,
  ShieldCheck,
  Bell,
  KeyRound,
  Save,
  Lock,
} from "lucide-react";
import "../styles/SystemSettings.css";

type SettingsTab = "general" | "security" | "alerts" | "api";

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  const tabs = [
    {
      id: "general" as SettingsTab,
      label: "General",
      icon: Settings,
    },
    {
      id: "security" as SettingsTab,
      label: "Security & Roles",
      icon: ShieldCheck,
    },
    {
      id: "alerts" as SettingsTab,
      label: "Alert Thresholds",
      icon: Bell,
    },
    {
      id: "api" as SettingsTab,
      label: "API & Integrations",
      icon: KeyRound,
    },
  ];

  return (
    <div className="system-settings">

      <div className="settings-header">
        <h1>
          <Settings size={22} />
          System Settings
        </h1>

        <div className="settings-breadcrumb">
          SAFESTRIDE FITNESS / ADMIN DASHBOARD / SYSTEM SETTINGS
        </div>
      </div>

      <div className="settings-layout">

        {/* LEFT SETTINGS MENU */}
        <div className="settings-nav">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                className={`settings-nav-item ${activeTab === tab.id ? "active" : ""
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={15} />
                <span>{tab.label}</span>

                {activeTab === tab.id && (
                  <span className="active-dot">•</span>
                )}
              </button>
            );
          })}

        </div>

        {/* RIGHT CONTENT */}
        <div className="settings-content">

          {activeTab === "general" && <GeneralSettings />}

          {activeTab === "security" && <SecuritySettings />}

          {activeTab === "alerts" && <AlertSettings />}

          {activeTab === "api" && <ApiSettings />}

        </div>

      </div>
    </div>
  );
}



function GeneralSettings() {
  const [maintenance, setMaintenance] = useState(false);

  return (
    <SettingsCard
      title="General Configuration"
      description="Manage global platform identity and basic attributes."
    >

      <div className="form-grid">

        <div className="form-group">
          <label>PLATFORM NAME</label>
          <input defaultValue="SafeStride Fitness" />
        </div>

        <div className="form-group">
          <label>SUPPORT EMAIL</label>
          <input defaultValue="support@safestride.ph" />
        </div>

      </div>

      <div className="setting-row">

        <div>
          <strong>Global Maintenance Mode</strong>

          <p>
            Disable all non-admin access for scheduled maintenance.
          </p>
        </div>

        <button
          className={`toggle ${maintenance ? "on" : ""}`}
          onClick={() => setMaintenance(!maintenance)}
        >
          <span />
        </button>

      </div>

      <SaveButton />

    </SettingsCard>
  );
}


function SecuritySettings() {

  const roles = [
    "Super Admin",
    "Safety Officer",
    "Data Analyst",
    "Support",
  ];

  return (
    <SettingsCard
      title="Access Control"
      description="Configure roles and high-level security protocols."
    >

      <h4 className="section-label">
        ACTIVE ROLES
      </h4>

      <div className="roles-list">

        {roles.map((role) => (

          <div className="role-item" key={role}>

            <div className="role-name">
              <Lock size={14} />
              {role}
            </div>

            <button className="permission-button">
              MANAGE PERMISSIONS
            </button>

          </div>

        ))}

      </div>

      <SaveButton />

    </SettingsCard>
  );
}



function AlertSettings() {

  return (
    <SettingsCard
      title="Alert Thresholds"
      description="Define when the system should trigger emergency notifications."
    >

      <div className="alert-box">

        <h3>
          Activity Monitoring
        </h3>

        <div className="form-grid">

          <div className="form-group">

            <label>
              NO MOVEMENT THRESHOLD
            </label>

            <input defaultValue="300s" />

          </div>

          <div className="form-group">

            <label>
              NOT RESPONSIVE DELAY
            </label>

            <input defaultValue="30s" />

          </div>

        </div>

      </div>


      <div className="alert-box">

        <h3>
          Batch Upload Density
        </h3>

        <p>
          Maximum data points per activity session before
          triggering validation.
        </p>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="65"
          className="range-slider"
        />

      </div>

      <SaveButton />

    </SettingsCard>
  );
}


/* =========================
   API SETTINGS
========================= */

function ApiSettings() {

  return (
    <SettingsCard
      title="API & External Nodes"
      description="Manage your system's connectivity and secret keys."
    >

      <div className="api-key">

        <div>

          <label>
            PRODUCTION KEY V2
          </label>

          <input
            type="password"
            value="sk_live_safestride_xxxxxxxxx"
            readOnly
          />

        </div>

        <span className="revoke">
          REVOKE
        </span>

      </div>


      <button className="generate-button">
        + GENERATE NEW API KEY
      </button>

      <SaveButton />

    </SettingsCard>
  );
}



function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {

  return (
    <div className="settings-card">

      <div className="card-heading">

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>

      </div>

      {children}

      <div className="settings-footer">

        Settings last changed by Admin on May 08, 2026

      </div>

    </div>
  );
}



function SaveButton() {

  return (
    <div className="save-container">

      <button className="save-button">

        <Save size={14} />

        Save Changes

      </button>

    </div>
  );
}