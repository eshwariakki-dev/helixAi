import {
  AlertTriangle,
  HeartPulse,
  ShieldAlert,
} from "lucide-react";

import "../../styles/dashboard/liveIncidentFeed.css";

function LiveIncidentFeed() {

  const incidents = [

    {
      icon:<AlertTriangle size={18}/>,
      title:"Machine Failure",
      domain:"Manufacturing",
      severity:"Critical"
    },

    {
      icon:<HeartPulse size={18}/>,
      title:"ICU Bed Shortage",
      domain:"Healthcare",
      severity:"High"
    },

    {
      icon:<ShieldAlert size={18}/>,
      title:"Worker Safety Alert",
      domain:"Manufacturing",
      severity:"Medium"
    }

  ];

  return (

    <div className="feed-card">

      <h2>Live Incident Feed</h2>

      {incidents.map((item,index)=>(

        <div
          key={index}
          className="feed-item"
        >

          <div className="feed-left">

            <div className="feed-icon">

              {item.icon}

            </div>

            <div>

              <h4>{item.title}</h4>

              <p>{item.domain}</p>

            </div>

          </div>

          <span
  className={`severity ${item.severity.toLowerCase()}`}
>
  {item.severity}
</span>
        </div>

      ))}

    </div>

  );

}

export default LiveIncidentFeed;