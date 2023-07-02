import React from 'react';
//import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';

const Totalscentral = () => {
  return (
    <Card>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <Image
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
              className="w-100"
              style={{ maxWidth: '200px', objectFit: 'cover' }}
            />
          </Col>
          <Row xs="12" sm="8">
            <Card.Body>
              <Card.Title>Total Transactions latte</Card.Title>
              <Card.Text>
                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed
                milk.
              </Card.Text>
              <Button variant="primary">Buy Latte</Button>
            </Card.Body>
          </Row>
        </Row>
      </Container>
    </Card>
  );
};

export default Totalscentral;
