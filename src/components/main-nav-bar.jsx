import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class MainNavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar className="bg-light justify-content-between shadow p-3 mb-5 bg-white rounded">
        <Navbar.Brand href="#home">My CoinDCX Data</Navbar.Brand>
        <Button type="submit">Sync</Button>
      </Navbar>
    );
  }
}

export default MainNavBar;
