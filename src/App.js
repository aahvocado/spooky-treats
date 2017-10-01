import './styles/css/App.css';
import React, { Component } from 'react';

import GameController from './controllers/GameController';
// import Utility from './controllers/Utility';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyStatusBar from './views/CandyStatusBar';

// import { TAGS, SIZES } from '../content/Constants';
// import { HOUSE_IDS } from './content/MapHouseContent';

class App extends Component {
	constructor() {
		super();
		this.state = {
			selectedHouseIdx: 0,
		}
	}

	componentWillMount() {
		// start a new game
		GameController.initNewGame();

		// load into the first house
		this.navigateToHouse(0);
	}

	render() {
		const { selectedHouse, currentNode } = this.state;

		// we want GameController.js to hold all the data
		const mapData = GameController.getMapData();
		const inventory = GameController.getInventory();
		const skills = GameController.getSkills();

		const hasActions = currentNode && currentNode.actionSet && currentNode.actionSet.length > 0;
		const inConversation = hasActions;

		return (
			<div className="st-app">
				<CandyMap
					data={ mapData }
					disabled={ inConversation }
					onHouseClick={ this.handleHouseClick }
					selectedHouse={ selectedHouse }
				/>
                <div className="arrow_box" />
				<CandyDisplay
					data={ currentNode }
					onNodeAction={ this.handleNodeActionClick }
					onNextClick={ this.handleNextHouseClick }
					disableNext={ inConversation }
				/>
				<CandyStatusBar
					inventory={ inventory }
					skills={ skills }
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
		when the next house button is clicked we gotta do stuff
	*/
	handleNextHouseClick = () => {
		const { selectedHouseIdx } = this.state;

		const nextIdx = selectedHouseIdx + 1;
		this.navigateToHouse(nextIdx);
	}

	/*

	*/
	navigateToHouse = (nextIdx) => {
		const mapData = GameController.getMapData();
		const nextHouse = mapData[nextIdx];
		const nextNode = nextHouse.storyNodeId ? GameController.getNodeById(nextHouse.storyNodeId) : undefined;

		this.setState({
			selectedHouseIdx: nextIdx,
			selectedHouse: nextHouse,
			currentNode: nextNode,
		});
	}

	/*
		A House was clicked
		@param {object} house - MapHouse data object
	*/
	handleHouseClick = (house) => {
		// don't do anything anymore
	}

	/*
		A StoryNode action was clicked
		@param {object} action - ActionSet object from StoryNode
	*/
	handleNodeActionClick = (action) => {
		const { targetId, giveItemId, giveSkillId } = action;
		if (giveItemId !== undefined) {
			GameController.receiveItem(giveItemId);
		}
		if (giveSkillId !== undefined) {
			GameController.receiveSkill(giveSkillId);
		}
		if (targetId !== undefined) {
			const newNode = GameController.getNodeById(action.targetId);
			this.handleNodeChange(newNode);
		} else {
			this.handleNodeChange(undefined);
		}
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
