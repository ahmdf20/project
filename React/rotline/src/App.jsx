import { Col, Container, Row } from "react-bootstrap"
import Insert from "./components/Insert";
import Data from "./components/Data";


const App = () => {
  return (
    <Container>
      <Row style={{ paddingTop: "3rem" }}>
        <Col md={6}>
          <Insert />
        </Col>
        <Col md={6}>
          <Data />
        </Col>
      </Row>
    </Container>
  )
}
export default App;