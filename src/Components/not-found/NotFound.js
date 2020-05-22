
import React, { Component } from 'react';
import {Card,Row} from 'react-bootstrap'
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <Row className="p-4 m-4 mx-auto">
      <Card className="mx-auto" style={{ width: 'auto',borderRadius:'25px' }}>
      
      <Card.Body>
        <Card.Title className="text-center">404</Card.Title>
       
        <Card.Text style={{fontSize:"44px"}}>
         NO PAGE FOUND
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Row>
    );
  }
}

export default NotFound;
