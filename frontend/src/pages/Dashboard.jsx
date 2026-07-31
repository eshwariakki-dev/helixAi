import DashboardHeader from "../components/dashboard/DashboardHeader";
import KPICards from "../components/dashboard/KPICards";
import LiveIncidentFeed from "../components/dashboard/LiveIncidentFeed";
import DomainOverview from "../components/dashboard/DomainOverview";
import DecisionQueue from "../components/dashboard/DecisionQueue";
import ExecutiveActions from "../components/dashboard/ExecutiveActions";
import OperationalTimeline from "../components/dashboard/OperationalTimeline";

import "../styles/dashboard/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <DashboardHeader />

      <KPICards />

      <div className="dashboard-row">

        <LiveIncidentFeed />

        <DomainOverview />

      </div>

      <div className="dashboard-row">

        <DecisionQueue />

        <ExecutiveActions />

      </div>

      <OperationalTimeline />

    </div>
  );
}

export default Dashboard;