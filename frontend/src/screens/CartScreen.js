import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';

const CartScreen = () => {
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <Message>
          Your cart is empty <Link to='/'>Go Back</Link>
        </Message>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal (0) items</h2>
              $0.00
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={true}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen; 