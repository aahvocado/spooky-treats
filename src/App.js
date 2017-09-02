import './styles/css/App.css';
import React, { Component } from 'react';
import BasicPage from './pages/BasicPage'; 

import ShellyController from './controllers/ShellyController';

class App extends Component {
  render() {
    return (
      <div className="st-app">
        <BasicPage />
        <ShellyController />
      </div>
    );
  }
}

export default App;
