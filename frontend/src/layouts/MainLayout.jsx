import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import "../styles/layout.css";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

       <div className="page-content">

  <div className="page-wrapper">

    <Outlet />

  </div>

</div>
      </div>
    </div>
  );
}

export default MainLayout;