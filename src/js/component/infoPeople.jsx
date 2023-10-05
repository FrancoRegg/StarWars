import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoPeople = () => {
  const params = useParams();
  const [infoPeople, setInfoPeople] = useState("")

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setInfoPeople(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div>
        <h1 className="text-black"></h1>
        <div> foto
          <img alt="" />
        </div>
        <div>nombre {infoPeople == "" ? "Espere..." : infoPeople.properties.name}</div>
        <div className="properties">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Altura</li>
            <li className="list-group-item">peso</li>
            <li className="list-group-item">color de pelo</li>
            <li className="list-group-item">color de ojos</li>
            <li className="list-group-item">planeta de origen</li>
            <li className="list-group-item">identificacion</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default InfoPeople

//src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
//{infoPeople == "" ? "Espere..." : infoPeople.properties.name}