import './styles/css/App.css';
import React, { Component } from 'react';

import GameController, { mapData } from './controllers/GameController';
// import Utility from './controllers/Utility';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyInventory from './views/CandyInventory';

class App extends Component {
	constructor() {
		super();
		// start a new game
		GameController.initNewGame();
	}

	render() {
		return (
			<div className="st-app">
				<CandyDisplay />
				<CandyMap
					data={ mapData }
				/>
				<CandyInventory />
			</div>
		);
	}
}

export default App;
