import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <section className="section header">
      <Navbar />
      <div className="container">
        <div className="content-header">
          <h2 className="big-description">
            Encounter<br></br>God's Grace
          </h2>
          <p className="description">
            Find solace, strength, and inspiration in the heart of our church.
          </p>
          <a href="" className="hero-button">
            <p> Find a service</p>{" "}
            <p>
              {" "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
