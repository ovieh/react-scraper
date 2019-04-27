import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';

const Article = ( {headline, summary, url, index, buttonText, handleSubmit, id, article, unsave} ) => (
  <ListGroupItem key={index}>
    {
      unsave &&
      <Button onClick={() => unsave(article)}  close />
    }
    <ListGroupItemHeading>{headline}</ListGroupItemHeading>
    <ListGroupItemText>{summary}</ListGroupItemText>
    <Button href={`https://www.nytimes.com${url}`} rel="noopener noreferrer" target="_blank">View on NYTimes</Button>
      {" "}
    <Button onClick={() => handleSubmit(article)} >{buttonText}</Button>
  </ListGroupItem>
);

export default Article;