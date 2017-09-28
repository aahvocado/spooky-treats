import './styles/css/App.css';
import React, { Component } from 'react';

import GameController from './controllers/GameController';
// import Utility from './controllers/Utility';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyStatusBar from './views/CandyStatusBar';

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
		const inventory = GameController.getInventory();

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
				<CandyStatusBar
					inventory={ inventory }
				/>
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
		this.handleReceiveItem(0);
	}

	/*
		A House was clicked
		@param {object} id - id of item
	*/
	handleReceiveItem = (id) => {
		GameController.receiveItem(id);
	}
}

export default App;
