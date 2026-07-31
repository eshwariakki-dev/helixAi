import { Clock3 } from "lucide-react";

import "../../styles/dashboard/operationalTimeline.css";

function OperationalTimeline() {

  const timeline = [
    {
      time: "08:10",
      event: "Machine Failure Detected",
      description: "Manufacturing Incident",
    },
    {
      time: "08:18",
      event: "Production Halted",
      description: "AI Alert Triggered",
    },
    {
      time: "08:30",
      event: "AI Analysis Started",
      description: "Decision Engine Running",
    },
    {
      time: "08:45",
      event: "Ripple Analysis Completed",
      description: "Impact Assessment Generated",
    },
    {
      time: "09:05",
      event: "Executive Recommendation Generated",
      description: "Recovery Plan Ready",
    },
  ];

  return (
    <div className="timeline-card">

      <h2>Operational Timeline</h2>

      <div className="timeline">

        {timeline.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <div className="timeline-time">
                <Clock3 size={16} />
                <span>{item.time}</span>
              </div>

              <div className="timeline-event">
                {item.event}
              </div>

              <div className="timeline-desc">
                {item.description}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default OperationalTimeline;