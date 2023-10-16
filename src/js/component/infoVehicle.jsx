import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoVehicle = () => {
  const params = useParams();
  const [infoVehicle, setInfoVehicle] = useState("")

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setInfoVehicle(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info">{infoVehicle == "" ? "Loading..." : infoVehicle.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Model: {infoVehicle == "" ? "Loading..." : infoVehicle.properties.model}</li>
              <li className="list-group-item">Starship Class: {infoVehicle == "" ? "Loading..." : infoVehicle.properties.starship_class}</li>
              <li className="list-group-item">Length: {infoVehicle == "" ? "Loading..." : infoVehicle.properties.length}</li>
              <li className="list-group-item">Passengers: {infoVehicle == "" ? "Loading..." : infoVehicle.properties.passengers}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoVehicle