import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Home from './pages/Home'
// import Saved from './pages/Saved'
import Nav from './components/Nav'

// import './App.css';

const App = () => 
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/' component={Saved} /> */}

      </Switch>
    </div>
  </Router>;


export default App;
