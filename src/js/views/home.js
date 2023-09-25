import React from "react";

import "../../styles/home.css";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="people">
      <h1>Peolpe</h1>
      <div className="imgPeople">
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/05/star-wars-galaxy-heroes_1.jpg?tf=3840x" alt="" className="image people"/>
      </div>
    </div>
    <div className="planet">
      <h1>planet</h1>
      <div className="imgPlanet">
        <img src="https://cnnespanol.cnn.com/wp-content/uploads/2016/07/tatooine-starwars.jpg?quality=100&strip=info" alt="" className="image planet"/>
      </div>
		</div>
    <div className="vehicle">
      <h1>vehicle</h1>
      <div className="imgVehicle">
        <img src="https://poptv.orange.es/wp-content/uploads/sites/3/2023/05/naves-star-wars-day-03-1024x576.jpg" alt="" className="image vehicle"/>
      </div>
    </div>
	</div>
);
