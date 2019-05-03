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

  const buttonStyle= {
    marginBottom: 30
  }


  return (
    <ListGroupItem key={index}>
      {
        unsave &&
        <Button onClick={() => unsave(article)}  close />
      }
      <Container>
        <Row>
          <Col lg='3'md='4' s="6">
            <img src={image} alt="" className="image-fluid "/>
          </Col>
          <Col lg='9' md='8's="6">
            <ListGroupItemHeading>{headline}</ListGroupItemHeading>
            <ListGroupItemText>{summary}</ListGroupItemText>
            
            <Container>
              <Row>
                <Col xs='auto'>
                  <Button href={`https://www.nytimes.com${url}`} rel="noopener noreferrer" target="_blank" className="mb-1">View on NYTimes</Button>
                </Col>
                {" "}
                <Col xs='auto'>
                  {
                    unsave ? <Button onClick={() => toggle()} >{buttonText}</Button>
                          : <Button onClick={() => handleSubmit(article)}>{buttonText}</Button>
                            
                  }
                </Col>
              </Row>
            </Container>
           
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