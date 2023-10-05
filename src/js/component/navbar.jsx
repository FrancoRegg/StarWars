import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light ">
      <Link to="/">
        <img className="imgNav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"  alt="" />
      </Link> 
      <div className="ml-auto">
        <Link to="/demo"></Link>
      </div>
      <div className="cTitulos">
        <Link to="/peoples">
          <span className="title">CHARACTERS</span>
        </Link>
        <Link to="/planets">
          <span className="title">PLANETS</span>
        </Link>
        <Link to="/vehicles">
          <span className="title">VEHICLES</span>
        </Link>
      </div>
    </nav>
  );
};
//<span className="navbar-brand h1 text-center">StarWars</span>
//<button className="btn btn-primary">Check the Context in action</button>