import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {

  const { store,actions } = useContext(Context)
  return (
    <div className="row">

      {store.planets.map((value, index) => {
        value["type"]="planets"
        return (
          <div className="card planets" key={index} style={{ "width": "18rem" }}>
             <img src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{value.name}</h4>
              <div className="read">
                <Link to={`/infoPlanet/${value.uid}`}>
                  <button className="btnread">Read More</button>
                </Link>
                <button className="fav"  onClick={() => actions.getFavorite(value)} ><i class="fas fa-star"></i></button>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Planets;

