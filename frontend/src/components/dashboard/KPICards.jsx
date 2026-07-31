import {
  AlertTriangle,
  ShieldAlert,
  Brain,
  Target,
} from "lucide-react";

import "../../styles/dashboard/kpiCards.css";

function KPICards() {

  const cards = [

    {
      title: "Incidents",
      value: "126",
      icon: <AlertTriangle size={28} />,
    },

    {
      title: "Risk Score",
      value: "92%",
      icon: <ShieldAlert size={28} />,
    },

    {
      title: "AI Decisions",
      value: "38",
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