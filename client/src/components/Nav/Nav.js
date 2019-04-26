import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import './Nav.css';

const Nav = () => {
  return(
    <div> 
      <Navbar color='dark'>
        <Link to={'/'}>Tech Scraper</Link>
      </Navbar>
    </div>
  );
} 

export default Nav;