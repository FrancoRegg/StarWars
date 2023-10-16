import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoPeople = () => {
  const [infoPeople, setInfoPeople] = useState ("")
  const params = useParams();
  
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setInfoPeople(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info"> {infoPeople == "" ? "Loading..." : infoPeople.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Height: {infoPeople == "" ? "" : infoPeople.properties.height}  </li>
              <li className="list-group-item">Mass: {infoPeople == "" ? "" : infoPeople.properties.mass} </li>
              <li className="list-group-item">Hair Color: {infoPeople == "" ? "" : infoPeople.properties.hair_color} </li>
              <li className="list-group-item">Eye Color: {infoPeople == "" ? "" : infoPeople.properties.eye_color} </li>
              <li className="list-group-item">Identification: {infoPeople == "" ? "" : infoPeople._id} </li>
            </ul>
          </div>  
        </div>
      </div>
    </>
  )
}

export default InfoPeople

//src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
//{infoPeople == "" ? "Espere..." : infoPeople.properties.name}

/*useEffect(() => {
  fetch(`https://www.swapi.tech/api/people/${params.uid}`)
    .then(resp => resp.json())
    .then(data => setInfoPeople(data.result))
    .catch(err => err)
}, [])^*/


/*
useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${params.uid}`);
        const data = await response.json();
        setInfoPeople(data.result);
      }
      catch (error) {
        console.error(error);
    }
  };
  fetchData();
  },[params.uid])

*/ 

//  const [infoPeople, setInfoPeople] = useState(null)