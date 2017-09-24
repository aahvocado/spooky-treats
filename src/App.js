import './styles/css/App.css';
import React, { Component } from 'react';

// views
import CandyDisplay from './views/CandyDisplay';
import CandyMap from './views/CandyMap';
import CandyInventory from './views/CandyInventory';

class App extends Component {
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
