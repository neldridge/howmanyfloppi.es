import React, { Component } from 'react';
import logo from './images/Floppy_disk_300_dpi.jpg';
import './App.css';
import FloppyForm from '../FloppyForm/FloppyForm.js'


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How many floppies is your data?</h1>
        </header>
          <FloppyForm />
      </div>
    );
  }
}

export default App;
