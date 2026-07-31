import {
  User,
  Bell,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

import "../styles/settings/settings.css";

function Settings() {
  return (
    <div className="settings-page">

      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your account and HELIX AI preferences.</p>
        </div>

        <button className="save-btn">
          Save Changes
        </button>
      </div>

      <div className="settings-grid">

        {/* Profile */}

        <div className="settings-card">

          <div className="card-title">
            <User size={24} />
            <h2>Profile</h2>
          </div>

          <label>Name</label>
          <input
            type="text"
            defaultValue="Admin User"
          />

          <label>Email</label>
          <input
            type="email"
            defaultValue="admin@helixai.com"
          />

        </div>

        {/* AI Configuration */}

        <div className="settings-card">

          <div className="card-title">
            <BrainCircuit size={24} />
            <h2>AI Configuration</h2>
          </div>

          <div className="setting-row">
            <span>AI Analysis</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Ripple Analysis</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Chaos Simulation</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Decision Engine</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <div className="card-title">
            <Bell size={24} />
            <h2>Notifications</h2>
          </div>

          <div className="setting-row">
            <span>Critical Alerts</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>AI Report Ready</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Simulation Completed</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Email Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

        </div>

        {/* System */}

        <div className="settings-card">

          <div className="card-title">
            <ShieldCheck size={24} />
            <h2>System Information</h2>
          </div>

          <div className="info-row">
            <span>Backend</span>
            <strong className="online">Connected</strong>
          </div>

          <div className="info-row">
            <span>Database</span>
            <strong className="online">Connected</strong>
          </div>

          <div className="info-row">
            <span>AI Model</span>
            <strong>Gemini 2.5</strong>
          </div>

          <div className="info-row">
            <span>Version</span>
            <strong>v1.0.0</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;