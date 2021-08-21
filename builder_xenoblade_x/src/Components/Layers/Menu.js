import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <Navbar sticky="top">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/builder">
            Builder
          </Link>
          <NavDropdown title="Api">
            <Dropdown.Item as={Link} to="/armor">
              Armor
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/meleeWeapon">
              Melee weapon
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/rangeWeapon">
              Range weapon
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
