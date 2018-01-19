import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Menu } from "./components"
import Routes from "./routes/routes.js"

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuState: false
    }
  }

  openMenu = () => {
    this.setState({ menuState: true })
  }

  closeMenu = () => {
    this.setState({ menuState: false })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar onMenuClick={this.openMenu}></Navbar>
          <Menu menuState={this.state.menuState} onMenuClose={this.closeMenu}></Menu>
          <Routes></Routes>
        </div>
      </Router>
    );
  }
}

export default App;
