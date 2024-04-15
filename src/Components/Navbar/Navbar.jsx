import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="#">PCCI.EMALI</a>
        </div>

        <div className="inner-navigation-menu">
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
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">HOME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
