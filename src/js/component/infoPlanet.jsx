import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoPlanet = () => {
  const [infoPlanet, setInfoPlanet] = useState("")
  const params = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setInfoPlanet(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";
            }} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info">{infoPlanet == "" ? "Loading..." : infoPlanet.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Diameter: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.diameter}</li>
              <li className="list-group-item">Rotation Period: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.rotation_period}</li>
              <li className="list-group-item">Orbital Period: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.orbital_period}</li>
              <li className="list-group-item">Gravity: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.gravity}</li>
              <li className="list-group-item">Climate: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.climate}</li>
              <li className="list-group-item">Terrain: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.terrain}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoPlanet