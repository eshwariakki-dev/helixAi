import {
  Brain,
  ShieldCheck,
  DollarSign,
  Clock3,
  CheckCircle,
  Sparkles
} from "lucide-react";

import "../styles/decision/decisionCenter.css";

function DecisionCenter() {

  const decisions = [
    {
      title: "Option A",
      action: "Immediate Maintenance",
      score: 96,
      cost: "$14,500",
      downtime: "2 Hours",
      risk: "Low",
      recommended: true,
      reasons: [
        "Lowest operational risk",
        "Failure probability reduced by 94%",
        "Fastest recovery plan",
      ],
    },
    {
      title: "Option B",
      action: "Continue Production",
      score: 63,
      cost: "$6,000",
      downtime: "None",
      risk: "High",
      recommended: false,
      reasons: [
        "Lowest immediate cost",
        "High failure probability",
        "Production continues",
      ],
    },
    {
      title: "Option C",
      action: "Reduce Production Load",
      score: 81,
      cost: "$9,200",
      downtime: "30 Minutes",
      risk: "Medium",
      recommended: false,
      reasons: [
        "Balances production",
        "Reduces equipment stress",
        "Medium operational risk",
      ],
    },
  ];

  return (

    <div className="decision-page">

      <div className="decision-header">

        <div>

          <h1>Decision Center</h1>

          <p>
            AI generated recommendations ranked by business impact.
          </p>

        </div>

        <button className="execute-btn">
          Execute Recommended Action
        </button>

      </div>

      <div className="summary-card">

        <div>

          <Brain size={22}/>

          <span>AI Confidence</span>

          <strong>96%</strong>

        </div>

        <div>

          <DollarSign size={22}/>

          <span>Estimated Savings</span>

          <strong>$120K</strong>

        </div>

        <div>

          <Clock3 size={22}/>

          <span>Recovery Time</span>

          <strong>2 Hours</strong>

        </div>

        <div>

          <ShieldCheck size={22}/>

          <span>Business Risk</span>

          <strong>Low</strong>

        </div>

      </div>

      <div className="decision-grid">

        {decisions.map((item,index)=>(

          <div
            key={index}
            className={`decision-card ${item.recommended ? "recommended" : ""}`}
          >

            {item.recommended &&

              <div className="recommended-badge">

                <Sparkles size={16}/>

                AI Recommended

              </div>

            }

            <h2>{item.title}</h2>

            <h3>{item.action}</h3>

            <div className="score">

              <span>AI Confidence</span>

              <strong>{item.score}%</strong>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{width:`${item.score}%`}}
              ></div>

            </div>

            <div className="metrics">

              <div>

                <DollarSign size={18}/>

                {item.cost}

              </div>

              <div>

                <Clock3 size={18}/>

                {item.downtime}

              </div>

              <div>

                <ShieldCheck size={18}/>

                {item.risk}

              </div>

            </div>

            <div className="reason-box">

              <h4>Why AI selected this</h4>

              {item.reasons.map((reason,i)=>(

                <div key={i} className="reason">

                  <CheckCircle size={16}/>

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