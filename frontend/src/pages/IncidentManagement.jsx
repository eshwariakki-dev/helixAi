import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Eye, Search, Plus, Factory, HeartPulse } from "lucide-react";
import "../styles/incident/incidentManagement.css";
import { getIncidents } from "../api/incidentApi";

function IncidentManagement() {

  const [incidents, setIncidents] = useState([]);
  const [search, setSearch] = useState("");

const [domainFilter, setDomainFilter] = useState("All Domains");

const [severityFilter, setSeverityFilter] = useState("All Severity");

const [statusFilter, setStatusFilter] = useState("All Status");
useEffect(() => {

  const loadIncidents = async () => {

    try {

      const data = await getIncidents();

      setIncidents(data);

    } catch (error) {

      console.error(error);

    }

  };

  loadIncidents();

}, []);

const filteredIncidents = incidents.filter((item) => {

  const matchesSearch =
    item.category
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||
    item.sector
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||
    String(item.id).includes(search);

  const matchesDomain =
    domainFilter === "All Domains" ||
    item.sector === domainFilter;

  const matchesSeverity =
    severityFilter === "All Severity" ||
    item.severity === severityFilter;

  const matchesStatus =
    statusFilter === "All Status" ||
    item.status === statusFilter;

  return (
    matchesSearch &&
    matchesDomain &&
    matchesSeverity &&
    matchesStatus
  );

});

  return (
    <div className="incident-page">

      <div className="incident-header">

        <div>

          <h1>Incident Management</h1>

          <p>
            Monitor Manufacturing and Healthcare incidents in real time.
          </p>

        </div>

        

      </div>

      <div className="incident-stats">

        <div className="stat-card">
          <h2>{incidents.length}</h2>
          <p>Total Incidents</p>
        </div>

        <div className="stat-card critical-card">
          <h2>

  {incidents.filter(
    i => i.severity === "Critical"
  ).length}

</h2>
          <p>Critical</p>
        </div>

        <div className="stat-card progress-card">
          <h2>

  {incidents.filter(
    i => i.status === "Investigating"
  ).length}

</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card resolved-card">
          <h2>

  {incidents.filter(
    i => i.status === "Resolved"
  ).length}

</h2>
          <p>Resolved</p>
        </div>

      </div>

      <div className="incident-toolbar">

        <div className="search-box">

          <Search size={18} />

          <input
  type="text"
  placeholder="Search incidents..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

        </div>

        <select
  value={domainFilter}
  onChange={(e) => setDomainFilter(e.target.value)}
>
          <option>Manufacturing</option>
          <option>Healthcare</option>
        </select>

       <select
  value={severityFilter}
  onChange={(e) => setSeverityFilter(e.target.value)}
>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
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

           {filteredIncidents.map((item) => (

              <tr key={item.id}>

               <td>INC-{item.id}</td>

                <td>

                 <td>

  <div className="incident-info">

    <div className="incident-icon">

      {item.sector === "Healthcare"
        ? <HeartPulse size={18} />
        : <Factory size={18} />}

    </div>

    <div>

      <strong>{item.category}</strong>

      <p>{item.sector}</p>

    </div>

  </div>

</td>

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

                <td>

  {new Date(item.created_at).toLocaleString()}

</td>

                <td>System</td>

                <td>

                  <div className="action-buttons">

                    <Link
                          to={`/incidents/${item.id}`}
                          className="view-btn"
                        >
                            <Eye size={16} />
                          </Link>

                    

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