import { useEffect, useState } from "react";

import { getDashboardSummary } from "../../api/dashboardApi";

import "../../styles/dashboard/domainOverview.css";

function DomainOverview() {

  const [summary, setSummary] = useState(null);

  useEffect(() => {

    const loadData = async () => {

      try {

        const data = await getDashboardSummary();

        setSummary(data.summary);

      } catch (error) {

        console.error(error);

      }

    };

    loadData();

  }, []);

  if (!summary) {

    return <div className="domain-card">Loading...</div>;

  }

  const total =
    summary.healthcare_incidents +
    summary.manufacturing_incidents;

  const manufacturing =
    total === 0
      ? 0
      : Math.round(
          (summary.manufacturing_incidents / total) * 100
        );

  const healthcare =
    total === 0
      ? 0
      : Math.round(
          (summary.healthcare_incidents / total) * 100
        );

  return (

    <div className="domain-card">

      <h2>Domain Overview</h2>

      <div className="domain-item">

        <span>Manufacturing</span>

        <strong>{manufacturing}%</strong>

      </div>

      <div className="progress">

        <div
          className="fill manufacturing"
          style={{ width: `${manufacturing}%` }}
        ></div>

      </div>

      <div className="domain-item">

        <span>Healthcare</span>

        <strong>{healthcare}%</strong>

      </div>

      <div className="progress">

        <div
          className="fill healthcare"
          style={{ width: `${healthcare}%` }}
        ></div>

      </div>

    </div>

  );

}

export default DomainOverview;