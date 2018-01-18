import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Menu } from "./components"
import Routes from "./routes/routes.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar onMenuStateChange={(state) => { }}></Navbar>
          <Menu onMenuStateChange={() => { }}></Menu>
          <Routes></Routes>
        </div>
      </Router>
    );
  }
}

export default App;
