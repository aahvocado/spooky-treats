import './styles/css/App.css';
import React, { Component } from 'react';

import GameController from './controllers/GameController';
// import Utility from './controllers/Utility';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyInventory from './views/CandyInventory';

class App extends Component {
	constructor() {
		super();
		this.state = {
			selectedHouse: undefined,
		}
	}

	componentWillMount() {
		// start a new game
		GameController.initNewGame();
	}

	render() {
		const { selectedHouse, currentNode } = this.state;

		const mapData = GameController.getMapData();

		return (
			<div className="st-app">
				<CandyDisplay
					data={ currentNode }
				/>
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
		const currentNode = GameController.getRandomNode()[0];

		this.setState({
			selectedHouse: house,
			currentNode: currentNode,
		});
	}
}

export default App;
