import { useLocation } from "react-router-dom";

import {
  AlertTriangle,
  Activity,
  Package,
  Truck,
  Brain,
  Clock,
  ArrowRight,
} from "lucide-react";

import "../styles/ripple/rippleAnalysis.css";

function RippleAnalysis() {
    const location = useLocation();

    const data = location.state;

    const incident = data?.incident;

    const ripple = data?.ripple;

    const report = data?.executive_report;


  return (
    <div className="ripple-page">

      <div className="ripple-header">

        <div>
          <h1>Ripple Analysis</h1>
          <p>
            Analyze cascading operational impacts across Manufacturing and Healthcare.
          </p>
        </div>

        <button className="run-btn">
          Run Analysis
        </button>

      </div>

      <div className="summary-grid">

  <div className="summary-card incident">

    <div className="summary-icon">
      <AlertTriangle size={30} />
    </div>

    <div>

      <h3>Incident</h3>

      <h2>{incident?.category}</h2>

      <p>{incident?.location}</p>

    </div>

  </div>

  <div className="summary-card risk">

    <div className="summary-icon">
      <Activity size={30} />
    </div>

    <div>

      <h3>Overall Risk</h3>

      <h2>{data?.analysis?.risk_score}%</h2>

      <p>{data?.analysis?.priority} Impact</p>

    </div>

  </div>

</div>

      <div className="ripple-card">

  <h2>Primary Ripple Effects</h2>

  <div className="impact-list">

    {ripple?.affected_sectors?.map((sector, index) => (

      <div
        key={index}
        className="impact-item"
      >

        <Package size={22} />

        <div>

          <h4>{sector}</h4>

          <p>
            Ripple Impact #{index + 1}
          </p>

        </div>

        <ArrowRight size={18} />

      </div>

    ))}

  </div>

</div>

     <div className="two-column">

  <div className="ripple-card">

    <h2>Secondary Effects</h2>

    <ul className="effect-list">

      {ripple?.affected_sectors?.map((sector, index) => (

        <li key={index}>

          <Truck size={18} />

          {sector}

        </li>

      ))}

    </ul>

  </div>

  <div className="ripple-card">

    <h2>

      <Brain size={20} />

      AI Recommendation

    </h2>

    <p>

      {report?.executive_recommendation ||
       report?.immediate_actions ||
       "No recommendation available."}

    </p>

  </div>

</div>

      <div className="ripple-card">

  <h2>

    <Clock size={20} />

    Ripple Timeline

  </h2>

  <div className="timeline">

    <div className="timeline-item">

      <span>Step 1</span>

      <p>
        Incident reported:
        {" "}
        {incident?.category}
      </p>

    </div>

    <div className="timeline-item">

      <span>Step 2</span>

      <p>
        Risk Level:
        {" "}
        {data?.analysis?.priority}
      </p>

    </div>

    <div className="timeline-item">

      <span>Step 3</span>

      <p>
        Ripple affected
        {" "}
        {ripple?.affected_count}
        {" "}
        sectors.
      </p>

    </div>

    <div className="timeline-item">

      <span>Step 4</span>

      <p>
        Cross Sector Impact:
        {" "}
        {ripple?.cross_sector_impact ? "Yes" : "No"}
      </p>

    </div>

    <div className="timeline-item">

      <span>Step 5</span>

      <p>
        AI Recommendation Generated
      </p>

    </div>

  </div>

  </div>
  </div>
  );
}

export default RippleAnalysis;