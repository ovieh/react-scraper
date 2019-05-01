import React, { useState } from 'react';
import { ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText, 
  Button,
  Collapse, Container, Row, Col } from 'reactstrap';
import Comment from '../Comment';


const Article = ( {headline, summary, url, index, buttonText, handleSubmit, id, article, unsave, image, comments} ) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  }

  return (
    <ListGroupItem key={index}>
      {
        unsave &&
        <Button onClick={() => unsave(article)}  close />
      }
      <Container>
        <Row>
          <Col xs="3">
            <img src={image}/>
          </Col>
          <Col xs="9">
            <ListGroupItemHeading>{headline}</ListGroupItemHeading>
            <ListGroupItemText>{summary}</ListGroupItemText>
            
            <Button href={`https://www.nytimes.com${url}`} rel="noopener noreferrer" target="_blank">View on NYTimes</Button>
              {" "}
            {
              unsave ? <Button onClick={() => toggle()} >{buttonText}</Button>
                    : <Button onClick={() => handleSubmit(article)}>{buttonText}</Button>
                      
            }
          </Col>
        </Row>
      </Container>

      <Collapse isOpen={collapse}>
        <Comment id={id} />
      </Collapse>
    </ListGroupItem>
  );

};

export default Article;