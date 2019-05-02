import React from 'react';
import {Card, CardBody, CardHeader, ListGroup, CardFooter } from 'reactstrap';

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
    <CardFooter>{<span>&copy;</span>} Ovieh Mosley <a href="https://github.com/ovieh/react-scraper" target="_blank" rel='noreferrer noopener'>Github</a></CardFooter>
  </Card>

);

export default Panel;