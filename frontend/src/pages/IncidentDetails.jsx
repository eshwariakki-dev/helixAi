import "../styles/incident/incidentDetails.css";

function IncidentDetails() {
  return (
    <div className="details-page">

      <div className="details-header">
        <div>
          <h1>Incident Details</h1>
          <p>Manufacturing Incident • Machine Failure</p>
        </div>

        <button className="ai-btn">
          Analyze with AI
        </button>
      </div>

      <div className="details-grid">

        <div className="details-card">

          <h3>Incident Information</h3>

          <div className="info-row">
            <span>ID</span>
            <strong>INC-101</strong>
          </div>

          <div className="info-row">
            <span>Domain</span>
            <strong>Manufacturing</strong>
          </div>

          <div className="info-row">
            <span>Incident</span>
            <strong>Machine Failure</strong>
          </div>

          <div className="info-row">
            <span>Status</span>
            <strong className="open">Open</strong>
          </div>

          <div className="info-row">
            <span>Severity</span>
            <strong className="critical">Critical</strong>
          </div>

        </div>

        <div className="details-card">

          <h3>Affected Systems</h3>

          <ul>

            <li>Machine A12</li>
            <li>Assembly Line 2</li>
            <li>Inventory Module</li>
            <li>Maintenance Team</li>

          </ul>

        </div>

      </div>

      <div className="timeline-card">

        <h3>Incident Timeline</h3>

        <div className="timeline-item">
          09:10 AM • Machine stopped unexpectedly
        </div>

        <div className="timeline-item">
          09:14 AM • Production halted
        </div>

        <div className="timeline-item">
          09:20 AM • Maintenance notified
        </div>

        <div className="timeline-item">
          09:35 AM • AI Analysis started
        </div>

      </div>

    </div>
  );
}

export default IncidentDetails;