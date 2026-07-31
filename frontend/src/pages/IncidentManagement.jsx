import { Link } from "react-router-dom";
import { Eye, Pencil, Search, Plus, Factory, HeartPulse } from "lucide-react";
import "../styles/incident/incidentManagement.css";
function IncidentManagement() {

  const incidents = [
    {
      id: "INC-101",
      domain: "Manufacturing",
      icon: <Factory size={18} />,
      incident: "Machine Failure",
      severity: "Critical",
      status: "Open",
      time: "2 mins ago",
      owner: "Maintenance Team",
    },
    {
      id: "INC-102",
      domain: "Healthcare",
      icon: <HeartPulse size={18} />,
      incident: "ICU Bed Shortage",
      severity: "High",
      status: "In Progress",
      time: "15 mins ago",
      owner: "Hospital Admin",
    },
    {
      id: "INC-103",
      domain: "Manufacturing",
      icon: <Factory size={18} />,
      incident: "Worker Safety Alert",
      severity: "Medium",
      status: "Resolved",
      time: "45 mins ago",
      owner: "Safety Officer",
    },
    {
      id: "INC-104",
      domain: "Healthcare",
      icon: <HeartPulse size={18} />,
      incident: "Medicine Shortage",
      severity: "Low",
      status: "Open",
      time: "1 hour ago",
      owner: "Pharmacy Team",
    },
  ];

  return (
    <div className="incident-page">

      <div className="incident-header">

        <div>

          <h1>Incident Management</h1>

          <p>
            Monitor Manufacturing and Healthcare incidents in real time.
          </p>

        </div>

        <button className="new-incident-btn">

          <Plus size={18} />

          Report New Incident

        </button>

      </div>

      <div className="incident-stats">

        <div className="stat-card">
          <h2>126</h2>
          <p>Total Incidents</p>
        </div>

        <div className="stat-card critical-card">
          <h2>18</h2>
          <p>Critical</p>
        </div>

        <div className="stat-card progress-card">
          <h2>32</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card resolved-card">
          <h2>76</h2>
          <p>Resolved</p>
        </div>

      </div>

      <div className="incident-toolbar">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search incidents..."
          />

        </div>

        <select>
          <option>All Domains</option>
          <option>Manufacturing</option>
          <option>Healthcare</option>
        </select>

        <select>
          <option>All Severity</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

      </div>

      <div className="incident-table-card">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Incident</th>

              <th>Severity</th>

              <th>Status</th>

              <th>Time</th>

              <th>Owner</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {incidents.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>

                  <div className="incident-info">

                    <div className="incident-icon">

                      {item.icon}

                    </div>

                    <div>

                      <strong>{item.incident}</strong>

                      <p>{item.domain}</p>

                    </div>

                  </div>

                </td>

                <td>

                  <span
                    className={`severity ${item.severity.toLowerCase().replace(" ","-")}`}
                  >

                    {item.severity}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${item.status.toLowerCase().replace(" ","-")}`}
                  >

                    {item.status}

                  </span>

                </td>

                <td>{item.time}</td>

                <td>{item.owner}</td>

                <td>

                  <div className="action-buttons">

                    <Link
  to={`/incidents/${item.id}`}
  className="view-btn"
>
  <Eye size={16} />
</Link>

                    <button className="edit-btn">

                      <Pencil size={16} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default IncidentManagement;