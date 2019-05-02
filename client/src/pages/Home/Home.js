import React, { useState, useEffect, lazy, Suspense } from 'react';
import Jumbotron from '../../components/Jumbotron'
import API from '../../utils/API';
import Panel from '../../components/Panel';
import Article from '../../components/Article'
import { 
  Container,
  Button,
  Alert,
  Spinner 
 } from 'reactstrap';

// const Panel = lazy(() => import('../../components/Panel'));

const message ={message: 'Press scrape to scrape new articles!'};

const Home = () => {

  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [articleCount, setArticleCount] = useState(0);
  const [isLoading, setisLoading] = useState(true);


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
  }

  const onDismiss = () => {
    setVisible(false);
  }

  useEffect(()=> {
    (async ()=> {
      const result = await API.getArticles();
      setArticles(result.data);
      setisLoading(false)
    })()
    }, []

  );

  return(
    <div>
      <Jumbotron>NYTimes Tech News Scraper</Jumbotron>
      <Container>
        <Suspense fallback={<Spinner color='dark' />}>
          <Panel title="Scraped Articles">
          <Alert color="info" isOpen={visible} toggle={onDismiss}>
            {articleCount} New Articles
          </Alert>
          <Button onClick={()=> scrape() }>Scrape New Articles</Button>
          <Suspense fallback={<Spinner color='dark' style={{ width: '10rem', height: '10rem' }} type='grow' />}>
            {(!isLoading ?
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
             
             : <p>{message.message}</p>)

            }
          </Suspense>

          </Panel>
        </Suspense>

      </Container>

    </div>

  )
  
}; 

export default Home;