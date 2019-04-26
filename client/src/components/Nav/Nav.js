import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarBrand, NavLink, Nav, Collapse, NavbarToggler } from 'reactstrap';
import './Nav.css';

const Navigation = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return(
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Tech Scraper</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/saved">Saved</NavLink>
            </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
    </div>
  );
} 

export default Navigation;