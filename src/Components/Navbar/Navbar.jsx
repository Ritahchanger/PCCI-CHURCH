import React, { useState } from "react";

import "./Navbar.scss";



const Navbar = () => {


  const [ showNavBar,setShowNavBar]= useState(false);


  const displayNavBar = () =>{
    
  }



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

                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">ABOUT US</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">SERVICES</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">EVENTS</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">MINISTRIES</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">CONTACT US</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
              </li>
              <li>
                <a href="#">DONATE</a>
                <p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </p>
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
