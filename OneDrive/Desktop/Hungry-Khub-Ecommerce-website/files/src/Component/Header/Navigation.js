import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {

  state = {
    isNavOpen: false,
  }

  openNavLink = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar
          color="dark"
          dark
          expand="sm" fixed="top">
          <NavbarBrand
            className="me-auto"
            href="/"
          >
            Hungry Khub
          </NavbarBrand>
          <NavbarToggler
            onClick={this.openNavLink}
          />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar >
              <NavItem style={{ padding: "10px" }}>
                <Link to="/" className='nav-link active'>
                  Home
                </Link>
              </NavItem>
              <NavItem style={{ padding: "10px" }}>
                <Link to="/food-item" className='nav-link'>
                  Food Item
                </Link>
              </NavItem>
              <NavItem style={{ padding: "10px" }}>
                <Link to="/about" className='nav-link'>
                  About
                </Link>
              </NavItem>
              <NavItem style={{ padding: "10px" }}>
                <Link to="/services" className='nav-link'>
                  Services
                </Link>
              </NavItem>
              <NavItem style={{ padding: "10px" }}>
                <Link to="/contact" className='nav-link'>
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Navigation;