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
            <AlertTriangle size={30}/>
          </div>

          <div>
            <h3>Incident</h3>
            <h2>Machine Failure</h2>
            <p>Production Line A12</p>
          </div>

        </div>

        <div className="summary-card risk">

          <div className="summary-icon">
            <Activity size={30}/>
          </div>

          <div>
            <h3>Overall Risk</h3>
            <h2>92%</h2>
            <p>Critical Impact</p>
          </div>

        </div>

      </div>

      <div className="ripple-card">

        <h2>Primary Ripple Effects</h2>

        <div className="impact-list">

          <div className="impact-item">
            <Package size={22}/>
            <div>
              <h4>Production Delay</h4>
              <p>Probability 96%</p>
            </div>
            <ArrowRight size={18}/>
          </div>

          <div className="impact-item">
            <Package size={22}/>
            <div>
              <h4>Inventory Shortage</h4>
              <p>Probability 82%</p>
            </div>
            <ArrowRight size={18}/>
          </div>

          <div className="impact-item">
            <Package size={22}/>
            <div>
              <h4>Quality Issues</h4>
              <p>Probability 74%</p>
            </div>
            <ArrowRight size={18}/>
          </div>

          <div className="impact-item">
            <Package size={22}/>
            <div>
              <h4>Worker Reallocation</h4>
              <p>Probability 61%</p>
            </div>
            <ArrowRight size={18}/>
          </div>

        </div>

      </div>

      <div className="two-column">

        <div className="ripple-card">

          <h2>Secondary Effects</h2>

          <ul className="effect-list">

            <li>
              <Truck size={18}/>
              Supplier Delay
            </li>

            <li>
              <Truck size={18}/>
              Delivery Delay
            </li>

            <li>
              <Truck size={18}/>
              Customer SLA Risk
            </li>

            <li>
              <Truck size={18}/>
              Revenue Loss
            </li>

          </ul>

        </div>

        <div className="ripple-card">

          <h2>
            <Brain size={20}/>
            AI Recommendation
          </h2>

          <ol className="recommendation-list">

            <li>Stop Machine A12 immediately.</li>

            <li>Move production to Line B.</li>

            <li>Notify warehouse.</li>

            <li>Increase spare inventory.</li>

            <li>Inform logistics team.</li>

          </ol>

        </div>

      </div>

      <div className="ripple-card">

        <h2>
          <Clock size={20}/>
          Ripple Timeline
        </h2>

        <div className="timeline">

          <div className="timeline-item">
            <span>08:10</span>
            <p>Machine Failure Detected</p>
          </div>

          <div className="timeline-item">
            <span>08:18</span>
            <p>Production Halted</p>
          </div>

          <div className="timeline-item">
            <span>08:30</span>
            <p>Inventory Impact</p>
          </div>

          <div className="timeline-item">
            <span>08:45</span>
            <p>Supplier Alert Triggered</p>
          </div>

          <div className="timeline-item">
            <span>09:15</span>
            <p>Recovery Plan Started</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RippleAnalysis;