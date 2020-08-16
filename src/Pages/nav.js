import React, { useState, useEffect } from 'react';
import { usersRef, auth } from './../api/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './../actions';
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
  MDBIcon
} from 'mdbreact';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

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

  const toggleCollapse = () => setIsOpen((oldState) => !oldState);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      console.log(authUser);
      if (authUser) {
        try {
          const userData = await usersRef.doc(authUser.uid).get();
          const user = userData.data();
          // const user = { isSigned: true, uid: authUser.uid };
          user.isSigned = true;
          dispatch(setUser(user));
        } catch (e) {
          console.log(e.message);
          dispatch(setUser({ isSigned: false }));
        }
      } else {
        dispatch(setUser({ isSigned: false }));
      }
    });
  }, []);
  const onLogout = () => {
    console.log('logout');
    auth.signOut();
  };

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
                <MDBNavLink to="/">{t('navBar.home')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/aboutus">{t('navBar.aboutus')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">{t('navBar.contact')}</MDBNavLink>
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
              {user.isSigned && <><MDBNavItem><MDBNavLink to="/"><MDBIcon icon="shopping-cart" /></MDBNavLink> </MDBNavItem><MDBNavItem><MDBNavLink to="/"><MDBIcon icon="user-circle" /></MDBNavLink> </MDBNavItem></>}
              <MDBNavItem>
                {!user.isSigned && <><MDBBtn
                  color="primary"
                  className="rounded-pill "
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
                </MDBBtn></>}
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
