import React from 'react';
import {Card, CardBody, CardHeader, ListGroup } from 'reactstrap';

const Panel = props => (
  <Card>
    <CardHeader>
      {props.title}
    </CardHeader>
    <CardBody>
      <ListGroup>
        {props.children}
      </ListGroup>
    </CardBody>
  </Card>

);

export default Panel;