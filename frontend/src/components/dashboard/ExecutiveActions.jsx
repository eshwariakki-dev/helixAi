import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { getIncidents } from "../../api/incidentApi";

import "../../styles/dashboard/executiveActions.css";

function ExecutiveActions() {

  const [actions, setActions] = useState([]);

  useEffect(() => {

    const loadActions = async () => {

      try {

        const data = await getIncidents();

        const latest = data.slice(0, 4).map((incident) => {

          return `Review ${incident.category} (${incident.severity}) in ${incident.sector}`;

        });

        setActions(latest);

      } catch (error) {

        console.error(error);

      }

    };

    loadActions();

  }, []);

  return (

    <div className="executive-card">

      <h2>Executive Actions</h2>

      {actions.map((item, index) => (

        <div
          className="action-item"
          key={index}
        >

          <CheckCircle2 size={18} />

          <span>{item}</span>

        </div>

      ))}

    </div>

  );

}

export default ExecutiveActions;