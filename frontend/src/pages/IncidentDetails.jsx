import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getIncident } from "../api/incidentApi";

import "../styles/incident/incidentDetails.css";

    function IncidentDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [incident, setIncident] = useState(null);

  useEffect(() => {

    const loadIncident = async () => {

      try {

        const data = await getIncident(id);

        setIncident(data);

      } catch (error) {

        console.error(error);

      }

    };

    loadIncident();

  }, [id]);

  if (!incident) {

    return <h2>Loading...</h2>;

  }


  return (
    <div className="details-page">

      <div className="details-header">
        <div>
          <h1>Incident Details</h1>
          <p>
  {incident.sector} • {incident.category}
</p>
        </div>

        <button
  className="ai-btn"
  onClick={() =>
    navigate("/analytics", {
      state: {
        incident,
      },
    })
  }
>
  Analyze with AI
</button>
      </div>

      <div className="details-grid">

        <div className="details-card">

          <h3>Incident Information</h3>

          <div className="info-row">
            <span>ID</span>
<strong>INC-{incident.id}</strong>
          </div>

          <div className="info-row">
            <span>Domain</span>
            <strong>{incident.sector}</strong>
          </div>

          <div className="info-row">
            <span>Incident</span>
            <strong>{incident.category}</strong>
          </div>

          <div className="info-row">
            <span>Status</span>
            <strong className="open">{incident.status}</strong>
          </div>

          <div className="info-row">
            <span>Severity</span>
            <strong className="critical">{incident.severity}</strong>
          </div>

        </div>

        <div className="details-card">

  <h3>Description</h3>

  <p>{incident.description}</p>

</div>

      </div>

      <div className="timeline-card">

  <h3>Incident Details</h3>

  <div className="timeline-item">

    Created:
    {" "}
    {new Date(incident.created_at).toLocaleString()}

  </div>

  <div className="timeline-item">

    Status:
    {" "}
    {incident.status}

  </div>

  <div className="timeline-item">

    Severity:
    {" "}
    {incident.severity}

  </div>

  <div className="timeline-item">

    Location:
    {" "}
    {incident.location}

  </div>

</div>

    </div>
  );
}

export default IncidentDetails;