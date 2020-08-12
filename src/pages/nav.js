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
import { useTranslation } from 'react-i18next';
function NavbarPage() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen((oldState) => !oldState);
  return (
    <>
      <MDBContainer>
        <MDBNavbar className="shadow-none" light expand="md">
          <MDBNavbarBrand>
            <strong className="black-text">BooksZone</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">{t('navBar.home')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">{t('navBar.aboutus')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">{t('navBar.contact')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">
                      {t('navBar.language')}
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">عربي</MDBDropdownItem>
                    <MDBDropdownItem href="#!">كوردى</MDBDropdownItem>
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
}

export default NavbarPage;
