import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

class NavBar extends Component {
  state = {};

  handleLogout() {
    console.log('logging out');
    axios
      .get('/logut')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Rex</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={2} href="#">
                Profile
              </NavItem>
              <NavDropdown eventKey={3} title="My List" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to="/browse">Books </Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                  <Link to="/browse">Food</Link>
                </MenuItem>
                <MenuItem eventKey={3.3}>
                  <Link to="/browse"> Movies</Link>
                </MenuItem>
                <MenuItem eventKey={3.3}>
                  <Link to="/browse">Music </Link>
                </MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Link to="/entry">
                  <Icon name="plus" size="large" />
                </Link>
              </NavItem>
              <NavItem onClick={this.handleLogout}>Log out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
