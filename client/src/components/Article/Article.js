import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';

const Article = ( {headline, summary, url, index, buttonText, handleSubmit, id, article} ) => (
  <ListGroupItem key={index}>
    <ListGroupItemHeading>{headline}</ListGroupItemHeading>
    <ListGroupItemText>{summary}</ListGroupItemText>
    <Button href={`https://www.nytimes.com${url}`}>View on NYTimes</Button>
      {" "}
    <Button onClick={() => handleSubmit(article)} >{buttonText}</Button>
  </ListGroupItem>
);

export default Article;