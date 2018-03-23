import React, { Component } from 'react';
import  './navigation.css'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
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
}

export default Navigation
