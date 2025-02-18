import { useState } from "react";
import logo from "../../assets/logo2-bg.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="navbar">
        {/* Navbar-left */}
      <div className="navbar-left">
        <a href="#"><img src={logo} alt="logo" /></a>
        <div className="logo-name">
            <p>SHRADHA</p>
            <p>CHEMICALS</p>
        </div>
      </div>
      {/* Navbar-right */}
      <div className="navbar-right">
        {["Home", "Products", "About Us", "Contact"].map((tab) => (
          <p 
            key={tab} 
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
