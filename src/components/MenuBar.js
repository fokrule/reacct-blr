import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import MainBody from './MainBody';
import SinglePost from './SinglePost';
import Add from './Add';
export default function MenuBar() {
	return (
		<div>
	  	<Router>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				  <Container>
				  <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav className="me-auto">
				      <Link to="/add">Add</Link>
				      <Nav.Link href="#pricing">Pricing</Nav.Link>
				      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown>
				    </Nav>
				    <Nav>
				      <Nav.Link href="#deets">More deets</Nav.Link>
				      <Nav.Link eventKey={2} href="#memes">
				        Dank memes
				      </Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				  </Container>
				</Navbar>
	      <div>
	        <Switch>
	          <Route exact path='/' >
	            <MainBody />
	          </Route>
	          <Route path="/single-post/:id">
	            <SinglePost />
	          </Route>
	          <Route path="/add">
	            <Add />
	          </Route>
	        </Switch>
	      </div>
	    </Router>
	    </div>
	);
}