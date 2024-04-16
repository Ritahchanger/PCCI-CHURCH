import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container flex">
        <div className="logo">
          <a href="#">PCCI</a>
        </div>
        <div className="centered-menu flex">
          <div className="navigation-menu">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">EVENTS</a>
              </li>
              <li>
                <a href="#">MINISTRIES</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">DONATE</a>
              </li>
            </ul>
          </div>
          <button className="universal-btn">JOIN US</button>
        </div>

        <div className="menu-icon">
          <i class="fa-sharp fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
