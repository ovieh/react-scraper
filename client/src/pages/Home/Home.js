import React, { useState } from 'react';
import Jumbotron from '../../components/Jumbotron'
import Panel from '../../components/Panel'
import { Col, Row, Container } from 'reactstrap';
import '../../utils/API';
import API from '../../utils/API';

const [articles, setArticles] = useState();

const getArticles = async () => {
  try {
    const articles = await API.getArticles()
    // console.log(articles.data);
    return articles.data;

  } catch (error) {
    console.log(error);
  }
}

// getArticles();

const Home = () => {

  return(
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <Panel />
          </Col>
        </Row>   
      </Container>
    </div>

  )
  
};

export default Home;