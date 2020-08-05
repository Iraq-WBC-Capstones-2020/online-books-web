import React, { useState } from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBBtn,
} from 'mdbreact';

const NavbarPage = () => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleCollapse = () =>
    setState((oldState) => {
      return { isOpen: !oldState.isOpen };
    });
  return (
    <>
      <MDBContainer>
        <MDBNavbar className="shadow-none" light expand="md">
          <MDBNavbarBrand>
            <strong className="black-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About Us</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Language</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Arabic</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Kurdish</MDBDropdownItem>
                    <MDBDropdownItem href="#!">English</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn color="primary" className="rounded-pill " size="sm">
                  Sign Up
                </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="rounded-pill"
                  size="sm"
                >
                  Login
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
      <hr className="mt-0" />
    </>
  );
};

export default NavbarPage;
