import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import InfoPeople from "./component/infoPeople.jsx";
import InfoPlanet from "./component/infoPlanet.jsx";
import InfoVehicle from "./component/infoVehicle.jsx";
import DemoPeople from "./views/demoPeople.js";
import People from "./component/people.jsx";
import Planets from "./component/planets.jsx";
import Vehicle from "./component/vehicle.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/peoples" element={<People />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/vehicles" element={<Vehicle/>} />
						<Route path="/infoplanet/:uid" element={<InfoPlanet />} />
						<Route path="/infovehicle/:uid" element={<InfoVehicle />} />
						<Route path="/infopeople/:uid" element={<InfoPeople />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
