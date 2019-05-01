import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron'
import API from '../../utils/API';
import Panel from '../../components/Panel';
import Article from '../../components/Article'

import { 
  Container,
  Button,
  Alert 
 } from 'reactstrap';

const Home = () => {

  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [articleCount, setArticleCount] = useState(0);

  const message = { message: 'No Sraped Articles'}

  const saveArticle = async (article) => {
    API.saveArticle(article);
    const newArticles = await API.getArticles();
    setArticles(newArticles.data);
  }

  const scrape = async () =>{
    const result = await API.scrape();
    const newArticles = await API.getArticles();
    setArticles(newArticles.data);
    setArticleCount(newArticles.data.length - articles.length);
    setVisible(true);
  }

  const onDismiss = () => {
    setVisible(false);
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
        <Panel title="Scraped Articles">
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
          {articleCount} New Articles
        </Alert>
        <Button onClick={()=> scrape() }>Scrape New Articles</Button>
          {articles.length ? (
            articles
              .filter(article => article.saved === false)
              .map((article,index) => (
                <Article 
                  headline={article.headline} 
                  summary={article.summary} 
                  url={article.url} 
                  key={index} 
                  buttonText='Save Article' 
                  handleSubmit={saveArticle} 
                  id={article._id} 
                  article={article}
                  image={article.img}
                />
            ))
          ) : (<h2>{message.message}</h2>)}
        </Panel>
      </Container>

    </div>

  )
  
}; 

export default Home;