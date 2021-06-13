import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Card className="shadow mb-5 bg-white rounded" border="primary">
        <Card.Header>My Portfolio</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>Here is my portfolio data</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Portfolio;
