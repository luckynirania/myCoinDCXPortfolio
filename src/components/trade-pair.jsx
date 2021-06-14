import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Entry from "./entries";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./dropdown-smooth.scss";
import Collapse from "react-bootstrap/Collapse";

class TradePair extends Component {
  state = {
    Round: "Current",
    open: true,
    sym: "",
    data: "",
    current: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      Round: "Current",
      open: "true",
      sym: props.sym,
      data: props.data,
      rounds: "",
      current: props.data.current,
    };
    // console.log(props.sym);
    console.log(props.data.current);
  }
  changeValue(e, data) {
    if (e !== "Current") {
      this.setState({
        Round: e,
        open: false,
        rounds: data,
      });
    } else {
      this.setState({
        Round: e,
        open: true,
        current: data,
      });
      console.log("Lokesh", this.state.current);
    }
  }

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
        <Card.Header className="d-flex justify-content-between">
          <span className="shadow p-2 rounded bg bg-info">
            {this.state.sym}
          </span>

          <DropdownButton
            title={this.state.Round}
            drop="down"
            as={ButtonGroup}
            key="down"
            id={"dropdown-button-drop-down"}
            variant="secondary"
          >
            <Dropdown.Item as="button">
              <div
                onClick={(e) =>
                  this.changeValue(
                    e.target.textContent,
                    this.state.data["current"]
                  )
                }
              >
                Current
              </div>
            </Dropdown.Item>
            {Object.keys(this.state.data["rounds"]).map((key) => (
              <Dropdown.Item as="button">
                <div
                  onClick={(e) =>
                    this.changeValue(
                      e.target.textContent,
                      this.state.data["rounds"][key]
                    )
                  }
                >
                  Round {parseInt(key) + 1}
                </div>
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Collapse appear="true" in={this.state.open} unmountOnExit="true">
              <Container
                fluid
                className="shadow mb-4 p-2 rounded bg bg-light"
                name="Current"
              >
                {this.state.current && (
                  <div>
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
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col>Req</Col>
                      <Col>M.Value</Col>
                      <Col>O.S.Value</Col>
                    </Row>
                  </div>
                )}
                {!this.state.current && <Row>There are No open orders</Row>}
              </Container>
            </Collapse>
            <Collapse in={!this.state.open} unmountOnExit="true">
              <Container
                fluid
                className="shadow mb-4 p-2 rounded bg bg-light"
                name="Current"
              >
                {Object.keys(this.state.rounds).map((key) => (
                  <Row>
                    <Col>{key}</Col>
                    <Col>{this.state.rounds[key]}</Col>
                  </Row>
                ))}
              </Container>
            </Collapse>
          </Card.Title>
          <Entry entries={this.state.data["items"]} />
        </Card.Body>
      </Card>
    );
  }
}

export default TradePair;
