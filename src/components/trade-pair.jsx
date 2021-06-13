import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class TradePair extends Component {
  state = {};
  render() {
    const CardStyle = {
      width: "35rem",
      display: "inline-block",
    };
    return (
      <Card
        className="shadow mb-5 bg-white rounded h-auto mx-auto"
        border="primary"
        style={CardStyle}
      >
        <Card.Header>
          <span className="shadow mb-4 p-2 rounded bg bg-info">ABC-XYZ</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Container fluid className="shadow mb-4 p-2 rounded bg bg-light">
              <Row>
                <Col>Total Bought</Col>
                <Col>10 ABC</Col>
                <Col>720 INR</Col>
              </Row>
              <Row>
                <Col>Total Sold</Col>
                <Col>8 ABC</Col>
                <Col>584 INR</Col>
              </Row>
              <Row>
                <Col>Total Open</Col>
                <Col>2 ABC</Col>
                <Col>140 INR</Col>
              </Row>
            </Container>
          </Card.Title>
          <Card.Text>
            <span className="shadow p-1 rounded bg bg-info">Entries</span>
            <Table
              striped
              bordered
              hover
              className="shadow rounded bg bg-light mt-2"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TradePair;
