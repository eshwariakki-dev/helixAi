import { Brain } from "lucide-react";

import "../../styles/dashboard/decisionQueue.css";

function DecisionQueue() {

  const decisions = [
    {
      title: "Machine A12 Shutdown",
      priority: "Critical",
    },
    {
      title: "Allocate ICU Beds",
      priority: "High",
    },
    {
      title: "Reorder Medicine Stock",
      priority: "Medium",
    },
  ];

  return (
    <div className="decision-card">

      <h2>AI Decision Queue</h2>

      {decisions.map((item, index) => (
        <div className="decision-item" key={index}>

          <div className="decision-left">
            <Brain size={18} />
            <div>
              <h4>{item.title}</h4>
              <p>Pending AI Approval</p>
            </div>
          </div>

          <span className="priority">
            {item.priority}
          </span>

        </div>
      ))}

    </div>
  );
}

export default DecisionQueue;