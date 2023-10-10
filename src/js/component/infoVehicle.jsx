import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoVehicle = () => {
  const params = useParams();
  const [infoVehicle, setInfoVehicle] = useState("")

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setInfoVehicle(data.result.properties))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="containerInfo">
        <h1 className="text-black"></h1>
        <div> foto
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} />
        </div>
        <div>Name: {infoVehicle == "" ? "Loading..." : infoVehicle.name}</div>
        <div className="properties">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Model: {infoVehicle == "" ? "" : infoVehicle.model}</li>
            <li className="list-group-item">Starship Class: {infoVehicle == "" ? "" : infoVehicle.starship_class}</li>
            <li className="list-group-item">Length: {infoVehicle == "" ? "" : infoVehicle.length}</li>
            <li className="list-group-item">Passengers: {infoVehicle == "" ? "" : infoVehicle.passengers}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default InfoVehicle