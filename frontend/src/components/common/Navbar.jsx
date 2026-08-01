import { Bell, UserCircle } from "lucide-react";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>HELIX AI</h2>
        <span>Connected Decision Intelligence Platform</span>
      </div>

      <div className="navbar-right">

       

        <Bell className="icon" />
        <UserCircle className="icon" />
      </div>
    </header>
  );
}

export default Navbar;