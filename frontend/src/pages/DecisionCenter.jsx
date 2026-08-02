import { useLocation, useNavigate } from "react-router-dom";
import {
  Brain,
  ShieldCheck,
  DollarSign,
  Clock3,
  CheckCircle,
  Sparkles,
} from "lucide-react";

import "../styles/decision/decisionCenter.css";

function DecisionCenter() {

  const location = useLocation();

  const navigate = useNavigate();

  const data = location.state;

  const decisions = data
    ? [
        {
          title: "AI Recommended Decision",

          action:
            data.executive_report?.executive_recommendation ||
            data.executive_report?.immediate_actions ||
            "No recommendation available",

          score: data.analysis?.risk_score || 0,

          cost:
            data.executive_report?.resource_requirements ||
            "Not Available",

          downtime:
            data.executive_report?.estimated_recovery_time ||
            "Not Available",

          risk:
            data.analysis?.priority ||
            "Unknown",

          recommended: true,

          reasons: [

            data.executive_report?.business_impact ||
            "Business impact unavailable",

            data.executive_report?.operational_impact ||
            "Operational impact unavailable",

            data.executive_report?.immediate_actions ||
            "No immediate actions",

          ],

        },

      ]
    : [];

  return (

    <div className="decision-page">

      <div className="decision-header">

        <div>

          <h1>Decision Center</h1>

          <p>
            AI generated recommendations ranked by business impact.
          </p>

        </div>

        <button
  className="execute-btn"
  onClick={() =>
    navigate("/analytics", {
      state: data,
    })
  }
>
  View AI Analysis
</button>

<button
  className="execute-btn"
  onClick={() =>
    navigate("/ripple-analysis", {
      state: data,
    })
  }
>
  View Ripple Analysis
</button>
<button
  className="execute-btn"
  onClick={() => {

    console.log("Decision Center Data:", data);

    navigate("/chaos-simulation", {
        state: data,
    });

}}
>
  View Chaos Simulation
</button>

      </div>

      <div className="summary-card">

        <div>

          <Brain size={22} />

          <span>AI Confidence</span>

          <strong>
            {data?.analysis?.risk_score || 0}%
          </strong>

        </div>

        <div>

          <DollarSign size={22} />

          <span>Business Impact</span>

          <strong>
            {data?.analysis?.business_impact || "N/A"}
          </strong>

        </div>

        <div>

          <Clock3 size={22} />

          <span>Recovery Time</span>

          <strong>
            {data?.executive_report?.estimated_recovery_time || "N/A"}
          </strong>

        </div>

        <div>

          <ShieldCheck size={22} />

          <span>Business Risk</span>

          <strong>
            {data?.analysis?.priority || "N/A"}
          </strong>

        </div>

      </div>

      <div className="decision-grid">

        {decisions.map((item, index) => (

          <div
            key={index}
            className={`decision-card ${item.recommended ? "recommended" : ""}`}
          >

            {item.recommended && (

              <div className="recommended-badge">

                <Sparkles size={16} />

                AI Recommended

              </div>

            )}

            <h2>{item.title}</h2>

            <h3>{item.action}</h3>

            <div className="score">

              <span>AI Confidence</span>

              <strong>{item.score}%</strong>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${item.score}%`,
                }}
              ></div>

            </div>

            <div className="metrics">

              <div>

                <DollarSign size={18} />

                {item.cost}

              </div>

              <div>

                <Clock3 size={18} />

                {item.downtime}

              </div>

              <div>

                <ShieldCheck size={18} />

                {item.risk}

              </div>

            </div>

            <div className="reason-box">

              <h4>Why AI selected this</h4>

              {item.reasons.map((reason, i) => (

                <div
                  key={i}
                  className="reason"
                >

                  <CheckCircle size={16} />

                  {reason}

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default DecisionCenter;