import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
