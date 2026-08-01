import { useEffect, useState } from "react";
import {
  AlertTriangle,
  HeartPulse,
  ShieldAlert,
} from "lucide-react";

import { getIncidents } from "../../api/incidentApi";

import "../../styles/dashboard/liveIncidentFeed.css";

function LiveIncidentFeed() {

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {

    const loadIncidents = async () => {

      try {

        const data = await getIncidents();
         console.log(data);

        setIncidents(data.slice(0, 5));

      } catch (error) {

        console.error(error);

      }

    };

    loadIncidents();

  }, []);

  const getIcon = (sector) => {

    switch (sector) {

      case "Healthcare":
        return <HeartPulse size={18} />;

      case "Manufacturing":
        return <AlertTriangle size={18} />;

      default:
        return <ShieldAlert size={18} />;

    }

  };

  return (

    <div className="feed-card">

      <h2>Live Incident Feed</h2>

      {incidents.map((item) => (

        <div
          key={item.id}
          className="feed-item"
        >

          <div className="feed-left">

            <div className="feed-icon">

              {getIcon(item.sector)}

            </div>

            <div>

              <h4>{item.title}</h4>

              <p>{item.sector}</p>

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