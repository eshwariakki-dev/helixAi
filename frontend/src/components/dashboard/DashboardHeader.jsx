import { Activity } from "lucide-react";

import "../../styles/dashboard/dashboardHeader.css";

function DashboardHeader() {
  return (
    <div className="dashboard-header">

      <div>

       <h1>Dashboard</h1>

<p>
  Real-time operational overview for Manufacturing and Healthcare
</p>

      </div>

      <div className="system-status">

        <Activity size={18} />

        <span>Backend Connected</span>

      </div>

    </div>
  );
}

export default DashboardHeader;