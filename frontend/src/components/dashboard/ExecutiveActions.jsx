import { CheckCircle2 } from "lucide-react";

import "../../styles/dashboard/executiveActions.css";

function ExecutiveActions() {

  const actions = [
    "Production shifted to Line B",
    "Maintenance team dispatched",
    "Warehouse notified",
    "Supplier informed",
  ];

  return (
    <div className="executive-card">

      <h2>Executive Actions</h2>

      {actions.map((item, index) => (

        <div className="action-item" key={index}>

          <CheckCircle2 size={18} />

          <span>{item}</span>

        </div>

      ))}

    </div>
  );
}

export default ExecutiveActions;