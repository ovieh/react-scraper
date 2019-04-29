import React, { useState } from 'react';
import { ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText, 
  Button,
  Collapse } from 'reactstrap';
import Comment from '../Comment';


const Article = ( {headline, summary, url, index, buttonText, handleSubmit, id, article, unsave} ) => {
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
      <ListGroupItemHeading>{headline}</ListGroupItemHeading>
      <ListGroupItemText>{summary}</ListGroupItemText>
      <Button href={`https://www.nytimes.com${url}`} rel="noopener noreferrer" target="_blank">View on NYTimes</Button>
        {" "}
      {
        unsave ? <Button onClick={() => toggle()} >{buttonText}</Button>
               : <Button onClick={() => handleSubmit(article)}>{buttonText}</Button>
                 
      }

      <Collapse isOpen={collapse}>
        <Comment id={id} />
      </Collapse>
    </ListGroupItem>
  );

};

export default Article;