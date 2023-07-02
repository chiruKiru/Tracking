import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react';


const Totalscentral = () => {
  return (
    <div>
    <Card className="d-flex flex-row">
      <Image
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
        className="w-100"
        style={{ maxWidth: '200px', objectFit: 'cover' }}
      />
      <Stack className="flex-grow-1">
        <CardBody>
          <Heading size="md">Total Transactions latte</Heading>
          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed
            milk.
          </Text>
        </CardBody>
        <Card.Footer>
          <Button variant="primary">Buy Latte</Button>
        </Card.Footer>
      </Stack>
    </Card>
</div>
  );
}

export default Totalscentral;
