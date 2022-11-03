import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tile from "./Tile.js"


function App() {
	const hogObj = hogs.map((hog) => {
		return (
			<Tile
				name= {hog.name}
				image= {hog.image}
				specialty= {hog.specialty}
				weight = {hog.weight}
				greased = {hog.greased}
				HMA = {hog['highest medal achieved']}
				key = {hog.name}
				/> 

			/*</>*/
		)
	} )
	return (
		<div className="App">
			<Nav />
			{hogObj}
		</div>
	);
}

export default App;
