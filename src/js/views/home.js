import React from "react";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/img/logo.jpg" className="img-fluid d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src="/img/personajes.png" className="img-fluid d-block w-100" alt="personajes" />
        </div>
        <div className="carousel-item">
          <img src="/img/robot.png" className="img-fuid d-block w-100" alt="robots" />
        </div>
        <div className="carousel-item">
          <img src="/img/nave.png" className="img-fluid d-block w-100" alt="nave" />
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


