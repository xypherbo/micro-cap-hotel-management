import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from "./components"
import Routes from "./routes/routes.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes></Routes>
        </div>
      </Router>
    );
  }
}

export default App;
