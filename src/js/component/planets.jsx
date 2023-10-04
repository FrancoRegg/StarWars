import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {

  const { store } = useContext(Context)
  console.log("AQUI PLANETS", store);

  return (
    <div className="row">

      {store.planets.map((value, index) => {
        return (
          <div className="card" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>

              <a href="#" className="btn btn-primary">Read More...</a>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Planets;