import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './profile-pic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my life</h1>
        </header>
        <p className="App-intro">
          We are still in development...
        </p>
      </div>
    );
  }
}

export default App;
