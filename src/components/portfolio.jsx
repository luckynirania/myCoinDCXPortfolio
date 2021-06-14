import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";

class Portfolio extends Component {
  state = {
    data: {},
    arr: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      arr: [1, 2, 3],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/portfolio`).then((res) => {
      const data = res.data;
      var arr = [];
      Object.keys(data).forEach(function (key) {
        arr.push(data[key]);
      });
      console.log(data);
      this.setState({ arr });
    });
  }
  render() {
    return (
      <Card className="shadow mb-5 bg-white rounded" border="primary">
        <Card.Header>My Portfolio</Card.Header>
        <Card.Body>
          <Card.Title>Current Value : </Card.Title>
          <Card.Text>
            <Table
              striped
              bordered
              hover
              className="shadow rounded bg bg-light mt-2"
            >
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Balance</th>
                  <th>Locked</th>
                  <th>Quantity</th>
                  <th>Value in INR</th>
                </tr>
              </thead>
              <tbody>
                {this.state.arr.map((item) => (
                  <tr>
                    <td>{item.currency}</td>
                    <td>{item.balance}</td>
                    <td>{item.locked_balance}</td>
                    <td>{item.total_balance}</td>
                    <td>Value from market</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Portfolio;
