import React from "react";
import logo from '/workspaces/StarWars-React/src/img/logo.jpg'
import personajes from '/workspaces/StarWars-React/src/img/personajes.png'
import nave from '/workspaces/StarWars-React/src/img/nave.png'
import "../../styles/home.css";

export const Home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="img-fluid d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={personajes} className="img-fluid d-block w-100" alt="personajes" />
        </div>
        <div className="carousel-item">
          <img src={nave} className="img-fluid d-block w-100" alt="nave" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}


