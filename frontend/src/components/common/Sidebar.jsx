import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  AlertTriangle,
  Upload,
  Brain,
  Activity,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>HELIX AI</h1>
        <p>Predict • Simulate • Decide</p>
      </div>

      <nav className="menu">

        <NavLink to="/" className="menu-item">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/incidents" className="menu-item">
          <AlertTriangle size={20} />
          <span>Incidents</span>
        </NavLink>

        <NavLink to="/upload" className="menu-item">
          <Upload size={20} />
          <span>Upload</span>
        </NavLink>

        <NavLink to="/decision-center" className="menu-item">
          <Brain size={20} />
          <span>Decision Center</span>
        </NavLink>

        <NavLink to="/chaos-simulation" className="menu-item">
          <Activity size={20} />
          <span>Chaos Simulation</span>
        </NavLink>

        <NavLink to="/recommendations" className="menu-item">
          <Bot size={20} />
          <span>AI Analysis</span>
        </NavLink>

       <NavLink to="/ripple-analysis" className="menu-item">
  <BarChart3 size={20} />
  <span>Ripple Analysis</span>
</NavLink>
        <NavLink to="/settings" className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;