import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";



const People = () => {

  const { store } = useContext(Context);
  return (
    <div className="row">

      {store.people.map((value, index)=>{
        return(

        <div className="card" key={index} style={{ "width": "18rem" }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>)
      })}

    </div>
      )
    
  };



export default People

//{`https://starwars-visualguide.com/assets/img/characters/${value.uid}/jpg`}