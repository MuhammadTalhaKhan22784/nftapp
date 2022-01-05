import React, { useState } from "react";
import "./Header.css";
//assets
import Logo from "../../Assets/Images/Logo.png";
function Header() {
  const [open, setOpen] = useState(true);
  const opening = (e) => {
    const navbar = document.querySelector(".navbar2");

    if (open === true) {
      navbar.classList.add("block");
      setTimeout(() => {
        navbar.classList.add("open");
      }, 50);
    } else {
      navbar.classList.remove("open");
      setTimeout(() => {
        navbar.classList.remove("block");
      }, 50);
    }
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <ul className="navbar2">
        <li className="mobile-close">
          <i onClick={opening} className="mobile fas fa-times"></i>
        </li>
        <li>
          <a href="#hero" className="nav-items">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-items">
            About
          </a>
        </li>
        <li>
          <a href="#roadmap" className="nav-items">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#team" className="nav-items">
            Team
          </a>
        </li>
        <li>
          <a href="#faq" className="nav-items">
            FAQ
          </a>
        </li>
      </ul>
      <div className="mobile-close">
      <i onClick={opening} className="mobile fas fa-bars"></i>
      </div>
      <div className="desktop header_social">
        <i className="header_icon fab fa-discord" style={{display:"flex"}}></i>
        <i className="header_icon fab fa-twitter" style={{display:"flex"}}></i>
    
      </div>
    </div>
  );
}

export default Header;
