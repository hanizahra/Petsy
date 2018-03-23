import React, { Component } from 'react';
import  './navigation.css'
import { Link } from 'react-router-dom';
import { Collapse, NavbarToggler, NavbarBrand,  NavLink } from 'reactstrap';
import { Button, MenuItem, NavDropdown } from 'react-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
		return(
			<Navbar dark expand="md" color="dark">
				<NavbarBrand href="/" className="mr-auto">Petsy</NavbarBrand>
				<NavbarToggler onClick={this.toggleNavbar} />
	      <Collapse isOpen={this.state.isOpen} navbar>
	        <Nav className="ml-auto" navbar>
	          <NavItem>
	            <NavLink href='/'>Home</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href='/randomanimal'>Random Animal</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink href='/results'>Animal Search</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="/petslist">Pets List</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="/quiz">Quiz</NavLink>
	          </NavItem>
	        </Nav>
	      </Collapse>
			</Navbar>
		)
	}
=======
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
>>>>>>> 2f8a55d601e4123c38c1cd6f8a08437a5935c60e
}

export default Navigation
