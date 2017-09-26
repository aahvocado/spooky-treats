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

		this.state = {
			selectedHouse: undefined,
		}
	}

	render() {
		const { selectedHouse } = this.state;

		return (
			<div className="st-app">
				<CandyDisplay />
				<CandyMap
					data={ mapData }
					selectedHouse={ selectedHouse }
					onHouseClick={ this.handleHouseClick }
				/>
				<CandyInventory />
			</div>
		);
	}

	handleHouseClick = (house) => {
		this.setState({ selectedHouse: house });
	}
}

export default App;
