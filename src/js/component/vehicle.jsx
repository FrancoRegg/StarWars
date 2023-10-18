import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicle = () => {

  const { store,actions } = useContext(Context)

  return (
    <div className="row">
      {store.vehicles.map((value, index) => {
        console.log("AQUI VALUE", value);
        return (
          <div className="card vehicle" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{value.name}</h4>
              <div className="read">
              <Link to={`/infoVehicle/${value.uid}`}>
                <button className="btnread">Read More</button>
              </Link>
                <button className="fav" onClick={() => actions.getFavorite(value)} ><i class="fas fa-star"></i></button>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Vehicle;