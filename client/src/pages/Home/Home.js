import React, { useState, useEffect, Suspense } from 'react';
import Jumbotron from '../../components/Jumbotron'
import API from '../../utils/API';
import Panel from '../../components/Panel';
import Article from '../../components/Article'
import Spinner from '../../components/Spinner';


import { 
  Container,
  Button,
  Alert 
 } from 'reactstrap';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || ''
  );

  useEffect(()=> {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

const Home = () => {
  // const [articles, setArticles] = useState([]);
  const [articles, setArticles] = useStateWithLocalStorage(
    'myArticlesInLocalStorage'
  );

  console.log(articles)

  const [visible, setVisible] = useState(false);
  const [articleCount, setArticleCount] = useState(0);



  const saveArticle = async (article) => {
    API.saveArticle(article);
    const newArticles = await API.getArticles();
    setArticles(newArticles.data);
  }

  const scrape = async () =>{
    API.scrape();
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
        <Suspense fallback={<Spinner />}>
        <Button onClick={()=> scrape() }>Scrape New Articles</Button>
          {articles.length ? (
            articles
              .filter(article => article.saved === false)
              .reverse()
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
          ) : (<Spinner />)}
          </Suspense>
        </Panel>
      </Container>

    </div>

  )
  
}; 

export default Home;