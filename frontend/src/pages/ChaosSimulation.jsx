import { useLocation } from "react-router-dom";
import {
  AlertTriangle,
  Brain,
  DollarSign,
  Clock3,
  ShieldCheck,
  Factory,
  Package,
  Truck,
  Users,
  Sparkles,
} from "lucide-react";

import "../styles/simulation/chaosSimulation.css";

function ChaosSimulation() {
    const location = useLocation();

  const data = location.state;

  const incident = data?.incident;

  const chaos = data?.chaos;

  const report = data?.executive_report;

  const analysis = data?.analysis;

  const firstScenario = chaos?.scenarios?.[0];
  console.log("Complete Data:", data);
console.log("Executive Report:", report);
console.log("Estimated Recovery:", report?.estimated_recovery_time);
console.log("First Scenario:", firstScenario);
  console.log(data);
console.log(report);
  return (
    <div className="chaos-page">

      <div className="chaos-header">

        <div>

          <h1>Chaos Simulation</h1>

          <p>
            Simulate critical operational disruptions before making executive decisions.
          </p>

        </div>

        
      </div>

      <div className="summary-grid">

        <div className="summary-card">

        <AlertTriangle size={26} />

        <span>Overall Risk</span>

        <strong>{analysis?.risk_score}%</strong>

        <p>{analysis?.priority}</p>

      </div>

      <div className="summary-card">

        <Clock3 size={26} />

        <span>Recovery Time</span>

        <strong>
  {report?.estimated_recovery_time ||
   firstScenario?.downtime ||
   "Not Available"}
</strong>

        <p>Estimated</p>

      </div>

        <div className="summary-card">

          <Brain size={26} />

          <span>AI Confidence</span>

          <strong>{analysis?.risk_score}%</strong>

          <p>Prediction Accuracy</p>

        </div>

        <div className="summary-card">

  <DollarSign size={26} />

  <span>Financial Impact</span>

  <strong>
    {firstScenario?.financial_loss || "Not Available"}
  </strong>

  <p>
    {firstScenario?.business_impact || "Unknown"}
  </p>

</div>

      </div>

      <div className="scenario-card">

  <h2>Simulation Scenarios</h2>

  <select>

    {chaos?.scenarios?.map((scenario, index) => (

      <option key={index}>

        {scenario.scenario}

      </option>

    ))}

  </select>

</div>

      <div className="result-grid">

        <div className="result-card">

  <h3>Overall Risk Assessment</h3>

  <div className="risk-bar">

    <div
      className="risk-fill"
      style={{
        width: `${analysis?.risk_score || 0}%`,
      }}
    ></div>

  </div>

  <h1 className="risk-value">

    {analysis?.risk_score || 0}%

  </h1>

  <p>

    {analysis?.priority} operational impact predicted.

  </p>

</div>

        <div className="result-card">

  <h3>Simulation Scenarios</h3>

  <div className="impact-list">

    {chaos?.scenarios?.map((scenario, index) => (

      <div
        key={index}
        className="impact-item"
      >

        <Factory size={18} />

        <span>{scenario.scenario}</span>

        <strong>{scenario.business_impact}</strong>

      </div>

    ))}

  </div>

</div>
        <div className="result-card">

  <h3>Recovery Estimate</h3>

  <h1>

    {firstScenario?.downtime || "Not Available"}

  </h1>

  <p>

    Expected operational recovery.

  </p>

  <div className="confidence-row">

    <span>Scenario Probability</span>

    <strong>

      {firstScenario?.probability || 0}%

    </strong>

  </div>

</div>

      </div>

      <div className="prediction-card">

  <div className="prediction-title">

    <Sparkles size={20} />

    <h2>Executive Recommendation</h2>

  </div>

  <div className="recommendation-list">

    <div>

      {report?.executive_recommendation ||
       report?.immediate_actions ||
       "No recommendation available."}

    </div>

  </div>

  <div className="executive-grid">

    <div>

      <DollarSign size={20} />

      <span>Financial Impact</span>

      <strong>

        {firstScenario?.financial_loss || "N/A"}

      </strong>

    </div>

    <div>

      <ShieldCheck size={20} />

      <span>Business Impact</span>

      <strong>

        {firstScenario?.business_impact || "N/A"}

      </strong>

    </div>

    <div>

      <Clock3 size={20} />

      <span>Recovery Time</span>

      <strong>

        {firstScenario?.downtime || "N/A"}

      </strong>

    </div>

  </div>

</div>
    </div>
  );
}

export default ChaosSimulation;