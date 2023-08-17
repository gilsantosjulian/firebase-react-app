import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Add from "./componentes/Add";
import List from "./componentes/List";
import "./App.css";

function App() {
  const [itemId, setItemId] = useState("");

  const getItemIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setItemId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Add id={itemId} setItemId={setItemId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <List getItemId={getItemIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;