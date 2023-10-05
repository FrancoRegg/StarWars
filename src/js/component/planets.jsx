import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {

  const { store } = useContext(Context)
  return (
    <div className="row">

      {store.planets.map((value, index) => {
        return (
          <div className="card planets" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";
              }}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>

              <Link to={`/infoPlanet/${value.uid}`}>
                <span className="btn btn-primary">Read More...</span>
              </Link>

            </div>
          </div>)
      })}
    </div>
  )
}

export default Planets;