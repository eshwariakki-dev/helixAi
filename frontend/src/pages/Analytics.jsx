import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getAIReport } from "../api/incidentApi";

import "../styles/analytics.css";

function Analytics() {

  const location = useLocation();

  const incidentId = location.state?.incident?.id;

  const [report, setReport] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadReport = async () => {

      try {

        const data = await getAIReport(
          incidentId
        );

        setReport(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    if (incidentId) {

      loadReport();

    }

  }, [incidentId]);

  if (loading) {

    return (
      <div className="loading">
        Loading AI Analysis...
      </div>
    );

  }

  if (!report) {

    return (
      <div className="not-found">
        No AI Report Found.
      </div>
    );

  }

  return (

    <div className="analytics-page">

      <div className="analytics-header">

        <h1>AI Analysis</h1>

        <p>
          AI generated executive intelligence for this incident.
        </p>

      </div>

      <div className="analytics-grid">

        <div className="analytics-card full">

          <h2>Executive Summary</h2>

          <p>{report.executive_summary}</p>

        </div>

        <div className="analytics-card">

          <h2>Root Cause Analysis</h2>

          <p>{report.root_cause_analysis}</p>

        </div>

        <div className="analytics-card">

          <h2>Business Impact</h2>

          <p>{report.business_impact}</p>

        </div>

        <div className="analytics-card">

          <h2>Operational Impact</h2>

          <p>{report.operational_impact}</p>

        </div>

        <div className="analytics-card">

          <h2>Risk Assessment</h2>

          <p>{report.risk_assessment}</p>

        </div>

        <div className="analytics-card full">

          <h2>Immediate Actions</h2>

          <p>{report.immediate_actions}</p>

        </div>

        <div className="analytics-card full">

          <h2>Short Term Actions</h2>

          <p>{report.short_term_actions}</p>

        </div>

        <div className="analytics-card full">

          <h2>Long Term Prevention</h2>

          <p>{report.long_term_prevention}</p>

        </div>

        <div className="analytics-card">

          <h2>Resource Requirements</h2>

          <p>{report.resource_requirements}</p>

        </div>

        <div className="analytics-card">

          <h2>Estimated Recovery Time</h2>

          <p>{report.estimated_recovery_time}</p>

        </div>

        <div className="analytics-card full">

          <h2>Executive Recommendation</h2>

          <p>{report.executive_recommendation}</p>

        </div>

      </div>

    </div>

  );

}

export default Analytics;