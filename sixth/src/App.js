import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Baphoon from './Baphoon';
import Clock from "./Clock";

class App extends Component {
  render() {

      let number = 0;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Clock/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Clock number={number}/>
          <Baphoon number={number}/>
      </div>
    );
  }
}

export default App;
