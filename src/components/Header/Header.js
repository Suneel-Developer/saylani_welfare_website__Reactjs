import React, { useState } from "react";
import Logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      
        <div
          className={
            isOpen ? "Navbar_content mobile-menu-link" : "Navbar_content"
          }
        >
          <div className="content_data">
          <li>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav_link">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/branches" className="nav_link">
              Branches
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="nav_link">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav_link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/bankdetails" className="nav_link">
              Bank Details
            </NavLink>
          </li>
        </div>
        <div className="nav_btn">
          <button>Donate Now</button>
          <button className="primary_button">Be a Sponser</button>
        </div>
      </div>

      <FaBars className="toggle" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Header;
