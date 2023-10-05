import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicle = () => {

  const { store } = useContext(Context)

  return (
    <div className="row">
      {store.vehicles.map((value, index) => {
        return (
          <div className="card vehicle" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>

              <Link to={`/infoVehicle/${value.uid}`}>
                <span className="btn btn-primary">Read More...</span>
              </Link>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Vehicle;