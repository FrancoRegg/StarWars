import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const People = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="row">
      {store.people.map((value, index) => {
        return (
          <div className="card people" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <div className="btn-read">
                <Link to={`/infoPeople/${value.uid}`}>
                  <span className="btn btn-primary">Read More...</span>
                </Link>
              </div>
              <div className="container-add">
                <button className="" onClick={() => actions.setFavorite(value.name)} ><i class="fas fa-star"></i></button>
              </div>
            </div>
          </div>)
      })}

    </div>
  )

};



export default People

//{`https://starwars-visualguide.com/assets/img/characters/${value.uid}/jpg`}