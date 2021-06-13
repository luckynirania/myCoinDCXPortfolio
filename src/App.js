import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import TradePairGroup from "./components/trade-pair-grouping";
import MainNavBar from "./components/main-nav-bar";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <Container fluid>
      <br></br>
      <MainNavBar />
      <Portfolio />
      <TradePairGroup />
    </Container>
  );
}

export default App;
