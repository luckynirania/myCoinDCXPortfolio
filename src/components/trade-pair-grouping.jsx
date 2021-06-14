import React, { Component } from "react";
import TradePair from "./trade-pair";
import CardColumns from "react-bootstrap/CardColumns";
import "./my-card-column.scss";
import axios from "axios";

class TradePairGroup extends Component {
  state = {
    data: {},
  };
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  sym = ["USDT-INR", "BTC-USDT", "ETH-USDT", "ADA-USDT", "LINK-USDT"];

  componentDidMount() {
    axios.get(`http://localhost:5000/trades`).then((res) => {
      const data = res.data;
      // console.log(data);
      this.setState({ data });
    });
  }
  render() {
    return (
      <CardColumns
        bsPrefix="my-card-columns"
        className="justify-content-center"
      >
        {Object.keys(this.state.data).map((key) => (
          <TradePair sym={key} data={this.state.data[key]} />
        ))}
      </CardColumns>
    );
  }
}

export default TradePairGroup;
