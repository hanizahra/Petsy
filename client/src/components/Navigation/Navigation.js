import React, { Component } from 'react';
import  './navigation.css'
import { Link } from 'react-router-dom';
import { Collapse, NavbarToggler, NavbarBrand,  NavLink } from 'reactstrap';
import { Button, MenuItem, NavDropdown } from 'react-bootstrap';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
		return(
			<Navbar dark expand="md" color="dark">
				<NavbarBrand href="/" className="mr-auto">Petsy</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
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
		// <nav>
    //   <ul>
		//     <li className='f3 link dim black underline pa3 pointer'><Link to='/'>Home</Link></li>
    //     <li className='f3 link dim black underline pa3 pointer'><Link to='/randomanimal'>Random Animal</Link></li>
		// 		<li className='f3 link dim black underline pa3 pointer'><Link to='/results'>Animal Search</Link></li>
    //     <li className='f3 link dim black underline pa3 pointer'><Link to="/petslist">Pets List</Link></li>
		// 		<li className='f3 link dim black underline pa3 pointer'><Link to="/quiz">Quiz</Link></li>
    //   </ul>
    // </nav>
	}

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





export default Navigation
