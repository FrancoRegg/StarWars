import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Favorite = () => {
  
  const { store } = useContext(Context)
  return (
    <div className="row">

      {store.favorites.map((fav,index) => {
      {store.favorites.map((fav,index) => {
      console.log(store.favorites);
        return (
          <div className="card favorite" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`}
            <img src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{fav.name}</h4>
            </div>
            <div><i class="fas fa-trash-can"></i></div>
            <div><i class="fas fa-trash-can"></i></div>
          </div>
        )
        
      })}

    </div>
  )
}

export default Favorite