import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

import { getIncidents } from "../../api/incidentApi";

import "../../styles/dashboard/decisionQueue.css";

function DecisionQueue() {

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {

    const loadIncidents = async () => {

      try {

        const data = await getIncidents();

        const pending = data
          .filter(
            (item) =>
              item.status === "Open" ||
              item.status === "Assigned" ||
              item.status === "Investigating"
          )
          .slice(0, 5);

        setIncidents(pending);

      } catch (error) {

        console.error(error);

      }

    };

    loadIncidents();

  }, []);

  return (

    <div className="decision-card">

      <h2>AI Decision Queue</h2>

      {incidents.map((item) => (

        <div
          className="decision-item"
          key={item.id}
        >

          <div className="decision-left">

            <Brain size={18} />

            <div>

              <h4>{item.category}</h4>

              <p>{item.sector}</p>

            </div>

          </div>

          <span className="priority">

            {item.severity}

          </span>

        </div>

      ))}

    </div>

  );

}

export default DecisionQueue;