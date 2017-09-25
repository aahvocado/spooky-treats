import './styles/css/App.css';
import React, { Component } from 'react';

import './controllers/GameController';
import './controllers/Utility';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyInventory from './views/CandyInventory';

class App extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div className="st-app">
				<CandyDisplay />
				<CandyMap />
				<CandyInventory />
			</div>
		);
	}
}

export default App;
