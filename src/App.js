import React from 'react';
import { Container, Row } from 'react-bootstrap'
import People from './components/People'
import Films from './components/Films'
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <People />
        </Row>
        <Row>
          <Films />
        </Row>
      </Container>
    </div>
  );
}

export default App;
