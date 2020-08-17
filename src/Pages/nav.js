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
import { useHistory } from 'react-router-dom';
import i18n from '../i18n';

function NavbarPage() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const goToSignUpPage = () =>
    history.push({
      pathname: '/signup',
    });
  const goToLoginPage = () =>
    history.push({
      pathname: '/login',
    });

  function hanndleClick(Lang) {
    i18n.changeLanguage(Lang);
  }
  const toggleCollapse = () => setIsOpen((oldState) => !oldState);
  return (
    <>
      <MDBContainer>
        <MDBNavbar className="shadow-none" light expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <strong className="black-text font-bold">BooksZone</strong>
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/">{t('navBar.home')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/aboutus">{t('navBar.aboutUs')}</MDBNavLink>
                <MDBNavLink to="/">{t('navBar.home')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/aboutus">{t('navBar.aboutus')}</MDBNavLink>
                <MDBNavLink to="/aboutus">{t('navBar.aboutus')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">{t('navBar.contact')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">
                      {t('navBar.Language')}
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem onClick={() => hanndleClick('ar')}>
                      عربي
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={() => hanndleClick('ku')}>
                      كوردى
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={() => hanndleClick('en')}>
                      English
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn
                  color="primary"
                  className="rounded-pill"
                  size="sm"
                  onClick={goToSignUpPage}
                >
                  Sign Up
                </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="rounded-pill"
                  size="sm"
                  onClick={goToLoginPage}
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
