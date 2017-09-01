import './styles/css/App.css';
import React, { Component } from 'react';
import BasicPage from './pages/BasicPage'; 

class App extends Component {
  render() {
    return (
      <div className="st-app">
        <BasicPage />
      </div>
    );
  }
}

export default App;
