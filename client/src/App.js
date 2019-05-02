import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import { Spinner } from 'reactstrap';
// import './App.css';

// const Home = lazy(() => { 
//   return Promise.all([
//     import('./pages/Home'),
//     new Promise(resolve => setTimeout(resolve, 10000))
//   ])
//   .then(([moduleExports]) => moduleExports)
// });

const Home = (
  lazy(() => (
    import('./pages/Home')
  ))
)

const Saved = (
  lazy(() => (
    import('./pages/Saved')
  ))
)

const App = () => 
  <Router>
      <Nav />
      <Suspense fallback={<Spinner color='dark' style={{ width: '10rem', height: '10rem' }} type='grow' />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </Suspense>
  </Router>;


export default App;
