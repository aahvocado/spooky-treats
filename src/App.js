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
					onNodeAction={ this.handleNodeActionClick }
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

	/*
		Changes to a Story Node
		@param {object} - a StoryNode object
	*/
	handleNodeChange = (node) => {
		this.setState({
			currentNode: node,
		});
	}

	/*
		A House was clicked
		@param {object} house - MapHouse data object
	*/
	handleHouseClick = (house) => {
		const newNode = GameController.getRandomNode();
		this.setState({
			selectedHouse: house,
		}, () => {
			this.handleNodeChange(newNode);
		});
	}

	/*
		A StoryNode action was clicked
		@param {object} action - ActionSet object from StoryNode
	*/
	handleNodeActionClick = (action) => {
		const newNode = GameController.getNodeById(action.targetId);
		this.handleNodeChange(newNode);
	}

	/*
		A House was clicked
		@param {object} house - MapHouse data object
	*/
	handleReceiveItem = (item) => {
		GameController.receiveItem(item);
	}
}

export default App;
