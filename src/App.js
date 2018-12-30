import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './router/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyRouter></MyRouter>
      </div>
    );
  }
}

export default App;
