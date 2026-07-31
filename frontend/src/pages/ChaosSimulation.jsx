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
  return (
    <div className="chaos-page">

      <div className="chaos-header">

        <div>

          <h1>Chaos Simulation</h1>

          <p>
            Simulate critical operational disruptions before making executive decisions.
          </p>

        </div>

        <button className="run-btn">

          <Brain size={18} />

          Generate AI Simulation

        </button>

      </div>

      <div className="summary-grid">

        <div className="summary-card">

          <AlertTriangle size={26} />

          <span>Overall Risk</span>

          <strong>92%</strong>

          <p>Critical</p>

        </div>

        <div className="summary-card">

          <Clock3 size={26} />

          <span>Recovery Time</span>

          <strong>4 hrs</strong>

          <p>Estimated</p>

        </div>

        <div className="summary-card">

          <Brain size={26} />

          <span>AI Confidence</span>

          <strong>96%</strong>

          <p>Prediction Accuracy</p>

        </div>

        <div className="summary-card">

          <DollarSign size={26} />

          <span>Estimated Savings</span>

          <strong>$120K</strong>

          <p>If Recommended Action Taken</p>

        </div>

      </div>

      <div className="scenario-card">

        <h2>Simulation Scenario</h2>

        <select>

          <option>Manufacturing • Machine Failure</option>

          <option>Manufacturing • Worker Safety</option>

          <option>Manufacturing • Production Delay</option>

          <option>Healthcare • ICU Bed Shortage</option>

          <option>Healthcare • Medicine Shortage</option>

          <option>Healthcare • Equipment Failure</option>

        </select>

      </div>

      <div className="result-grid">

        <div className="result-card">

          <h3>Overall Risk Assessment</h3>

          <div className="risk-bar">

            <div
              className="risk-fill"
              style={{ width: "92%" }}
            ></div>

          </div>

          <h1 className="risk-value">

            92%

          </h1>

          <p>Critical operational impact predicted.</p>

        </div>

        <div className="result-card">

          <h3>Business Impact</h3>

          <div className="impact-list">

            <div className="impact-item">

              <Factory size={18}/>

              <span>Production</span>

              <strong>High</strong>

            </div>

            <div className="impact-item">

              <Package size={18}/>

              <span>Inventory</span>

              <strong>Medium</strong>

            </div>

            <div className="impact-item">

              <Truck size={18}/>

              <span>Logistics</span>

              <strong>Critical</strong>

            </div>

            <div className="impact-item">

              <Users size={18}/>

              <span>Workforce</span>

              <strong>Low</strong>

            </div>

          </div>

        </div>

        <div className="result-card">

          <h3>Recovery Estimate</h3>

          <h1>4 Hours</h1>

          <p>Expected operational recovery.</p>

          <div className="confidence-row">

            <span>AI Confidence</span>

            <strong>96%</strong>

          </div>

        </div>

      </div>

      <div className="prediction-card">

        <div className="prediction-title">

          <Sparkles size={20}/>

          <h2>Executive Recommendation</h2>

        </div>

        <div className="recommendation-list">

          <div>

            ✅ Stop Machine A12 Immediately

          </div>

          <div>

            ✅ Dispatch Maintenance Team

          </div>

          <div>

            ✅ Reallocate Inventory

          </div>

          <div>

            ✅ Notify Logistics Partners

          </div>

        </div>

        <div className="executive-grid">

          <div>

            <DollarSign size={20}/>

            <span>Estimated Savings</span>

            <strong>$120,000</strong>

          </div>

          <div>

            <ShieldCheck size={20}/>

            <span>Risk Reduction</span>

            <strong>91%</strong>

          </div>

          <div>

            <Clock3 size={20}/>

            <span>Recovery Time</span>

            <strong>4 Hours</strong>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChaosSimulation;