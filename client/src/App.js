import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Home from './pages/Home'
import Nav from './components/Nav'

// import './App.css';

const App = () => 
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </Router>;


export default App;
