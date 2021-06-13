import React, { Component } from "react";
import TradePair from "./trade-pair";
import CardColumns from "react-bootstrap/CardColumns";
import "./my-card-column.scss";

class TradePairGroup extends Component {
  state = {};
  render() {
    return (
      <CardColumns
        bsPrefix="my-card-columns"
        className="justify-content-center"
      >
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
        <TradePair />
      </CardColumns>
    );
  }
}

export default TradePairGroup;
