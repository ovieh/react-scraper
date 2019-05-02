import React, { useState,useEffect, Suspense } from 'react';
import Jumbotron from '../../components/Jumbotron'
import API from '../../utils/API';
import Panel from '../../components/Panel';
import Article from '../../components/Article';

import { 
  Container,
  Spinner
 } from 'reactstrap';

const Home = () => {

  const [articles, setArticles] = useState([]);

  const message = {message: 'No saved articles!'}

  const unsaveArticle = async (article) => {
    API.unsaveArticle(article);
    const newArticles = await API.getArticles();
    setArticles(newArticles.data);

  }


  useEffect(()=> {
    (async ()=> {
      const result = await API.getArticles();
      setArticles(result.data)
    })()
    }, []

  );

  return(
    <div>
      <Jumbotron>NYTimes Tech News Scraper</Jumbotron>
      <Container>
        <Suspense fallback={<Spinner color='dark' style={{ width: '10rem', height: '10rem' }} type='grow' />}>
          <Panel title="Saved Articles">
            {articles.length ? (
              articles
                .filter(article => article.saved === true)
                .map((article,index) => (
                  <Article 
                    headline={article.headline} 
                    summary={article.summary} 
                    url={article.url} 
                    key={index} 
                    buttonText='Comment' 
                    unsave={unsaveArticle} 
                    id={article._id} 
                    article={article}
                    comments={article.comments}
                    image={article.img}
                  />
              ))
            ) : (<h2>{message}</h2>)}
          </Panel>
        </Suspense>
      </Container>

    </div>

  )
  
}; 

export default Home;