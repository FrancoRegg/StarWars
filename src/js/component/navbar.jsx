import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const{actions, store} = useContext(Context)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul class="dropdown-menu">
          {store.favorites.map((fav, index) => (
							<li key={index}>
								<a className="dropdown-item" href="#">
								{fav}</a>
							</li>
							))}
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="contnav collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/">
            <img className="imgNav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU" alt="" />
          </Link>
          <div className="ml-auto">
            <Link to="/demo"></Link>
          </div>
          <div className="Titulos">
            <Link to="/peoples"><span className="title btn ">Characters</span></Link>
            <Link to="/planets"><span className="title btn ">Planets</span></Link>
            <Link to="/vehicles"><span className="title btn ">Vehicles</span></Link>
            <Link to="/favorites"><span className="title btn ">Favorites</span></Link>
          </div>
          <div className="favorite"></div>
        </div>
      </div>
    </nav>
  )
}
//<div className="navbar-brand h1 text-center">StarWars</div>
//<button className="btn ">Check the Context in action</button>

/*<nav className="navbar navbar-light ">
      <Link to="/">
        <img className="imgNav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"  alt="" />
      </Link> 
      <div className="ml-auto">
        <Link to="/demo"></Link>
      </div>
      <div className="cTitulos">
        <Link to="/peoples">
          CHARACTERS</div>
        </Link>
        <Link to="/planets">
          PLANETS</div>
        </Link>
        <Link to="/vehicles">
          VEHICLES</div>
        </Link>
      </div>
    </nav>*/