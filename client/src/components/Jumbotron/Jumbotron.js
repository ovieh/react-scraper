import React from 'react';
import { Jumbotron } from 'reactstrap';

const Jumbo = props => {

  return(
    <Jumbotron>
      <h1 className="display-3">{props.children}</h1>
    </Jumbotron>
  )
}

export default Jumbo;