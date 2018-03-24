import React, { Component } from 'react';
import  './navigation.css'
import { Link } from 'react-router-dom';
import { Button, MenuItem, NavDropdown } from 'react-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Petsy</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href='/'>Home</NavItem>
          <NavItem eventKey={2} href='/randomanimal'>Random Animal</NavItem>
          <NavItem eventKey={3} href='/results'>Animal Search</NavItem>
          <NavItem eventKey={4} href="/petslist">Pets List</NavItem>
          <NavItem eventKey={5} href="/quiz">Quiz</NavItem>

        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
