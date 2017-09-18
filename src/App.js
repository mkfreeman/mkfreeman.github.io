import React, { Component } from 'react';
import logo from './logo.svg';
import Resources from './Resources';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Michael Freeman</h1>
          <h2>Lecturer // Information School // University of Washington</h2>
          <h2>Visualization. Data Science. Web Development.</h2>
        </div>
        <Resources/>
      </div>
    );
  }
}

export default App;
