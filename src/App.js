import './styles/css/App.css';
import React, { Component } from 'react';

// pages
import BasicPage from './pages/BasicPage'; 

// controllers
import ShellyController from './controllers/ShellyController';

// components
import CardHolder from './components/player/CardHolder';

class App extends Component {
  render() {
    return (
      <div className="st-app">
        <BasicPage />
        <ShellyController />
        <CardHolder />
      </div>
    );
  }
}

export default App;
