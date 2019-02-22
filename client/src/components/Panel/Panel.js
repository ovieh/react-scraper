import React from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Panel = ({ articles }) => {

  const parseArticles = (article, id) => {

  }

  const renderArticles = articles => {
    if(articles && articles.length > 0)
      return articles.map((article, index) => <ListGroupItem key={index}>
        <span>
          <ListGroupItemHeading>{`${article.headline}`}</ListGroupItemHeading>
        </span>
        <ListGroupItemText>{`${article.summary}`}</ListGroupItemText>
      </ListGroupItem>)
    else
      return <ListGroupItem>
        No Scraped Articles!
      </ListGroupItem>
  }

  return(
    <Card>
      <CardHeader>
        Scraped Articles
      </CardHeader>
      <CardBody>
        <ListGroup>
          {renderArticles(articles)}
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default Panel;