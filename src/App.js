import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FactsListContainer from './containers/FactsListContainer'
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <FactsListContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
