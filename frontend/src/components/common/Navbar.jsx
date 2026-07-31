import { Bell, Search, UserCircle } from "lucide-react";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>HELIX AI</h2>
        <span>Connected Decision Intelligence Platform</span>
      </div>

      <div className="navbar-right">
        <div className="search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        <Bell className="icon" />
        <UserCircle className="icon" />
      </div>
    </header>
  );
}

export default Navbar;