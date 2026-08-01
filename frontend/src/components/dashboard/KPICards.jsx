import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  Brain,
  Target,
} from "lucide-react";

import { getDashboardSummary } from "../../api/dashboardApi";

import "../../styles/dashboard/kpiCards.css";

function KPICards() {

  const [summary, setSummary] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

       const data = await getDashboardSummary();

console.log(JSON.stringify(data, null, 2));
console.log("Summary =", data.summary);
console.log("Total =", data.summary?.total_incidents);

setSummary(data.summary);
      } catch (error) {

        console.error("Failed to load dashboard:", error);

      }

    };

    fetchDashboard();

  }, []);

  const cards = [

    {
      title: "Incidents",
      value: summary?.total_incidents ?? "--",
      icon: <AlertTriangle size={28} />,
    },

    {
      title: "Risk Score",
      value: `${summary?.critical_incidents ?? 0}`,
      icon: <ShieldAlert size={28} />,
    },

    {
      title: "AI Decisions",
      value: `${summary?.resolved_incidents ?? 0}`,
      icon: <Brain size={28} />,
    },

    {
      title: "AI Accuracy",
      value: "96%",
      icon: <Target size={28} />,
    },

  ];

  return (

    <div className="kpi-grid">

      {cards.map((card) => (

        <div
          className="kpi-card"
          key={card.title}
        >

          <div className="kpi-icon">
            {card.icon}
          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>

        </div>

      ))}

    </div>

  );

}

export default KPICards;