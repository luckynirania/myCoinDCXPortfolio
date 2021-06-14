import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

class Entry extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.entries,
    };
  }
  render() {
    return (
      <Card.Text>
        <div className="d-flex justify-content-between">
          <span className="shadow p-1 rounded bg bg-warning">Entries</span>
          <span className="shadow p-1 rounded bg bg-success">Profit/Loss</span>
        </div>
        <Table
          striped
          bordered
          hover
          className="shadow rounded bg bg-light mt-2"
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Value after fees</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.data).map((key) => (
              <tr>
                <td>{this.state.data[key].timestamp}</td>
                <td>{this.state.data[key].side}</td>
                <td>{parseFloat(this.state.data[key].quantity)}</td>
                <td>{parseFloat(this.state.data[key].price)}</td>
                <td>
                  {parseFloat(this.state.data[key].price) *
                    parseFloat(this.state.data[key].quantity) +
                    parseFloat(this.state.data[key].fee_amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Text>
    );
  }
}

export default Entry;
