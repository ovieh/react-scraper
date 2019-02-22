import React, { useState,useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron'
import Panel from '../../components/Panel'
import { Col, Row, Container } from 'reactstrap';
import '../../utils/API';
import API from '../../utils/API';



const Home = () => {
  const [articles, setArticles] = useState();


  useEffect(() => {
    API.getArticles()
      .then(response => setArticles(response.data) ) 
  }, []);

  console.log(articles);


  return(
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <Panel 
              articles = { articles }
            />
          </Col>
        </Row>   
      </Container>
    </div>

  )
  
};

export default Home;