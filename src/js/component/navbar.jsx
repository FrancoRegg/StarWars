import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  console.log("STORE", store);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid contnav">
          <Link to="/">
            <img
              className="imgNav"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
              alt=""
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="Titulos">
              <Link to="/peoples">
                <span className="title btn ">Characters</span>
              </Link>
              <Link to="/planets">
                <span className="title btn ">Planets</span>
              </Link>
              <Link to="/vehicles">
                <span className="title btn ">Vehicles</span>
              </Link>
              <Link to="/favorites">
                <span className="title btn ">
                  Favorites {store.favorites.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

/* 
<nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <div
            className="contnav collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Link to="/">
              <img
                className="imgNav"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="Titulos">
                <Link to="/peoples">
                  <span className="title btn ">Characters</span>
                </Link>
                <Link to="/planets">
                  <span className="title btn ">Planets</span>
                </Link>
                <Link to="/vehicles">
                  <span className="title btn ">Vehicles</span>
                </Link>
                <Link to="/favorites">
                  <span className="title btn ">
                    Favorites {store.favorites.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
*/

/*

*/