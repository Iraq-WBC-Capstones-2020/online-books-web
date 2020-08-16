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
  MDBIcon,
} from 'mdbreact';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import i18n from '../i18n';

function NavbarPage() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

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
    auth.signOut();
  };
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
              {user.isSigned && (
                <>
                  <MDBNavItem>
                    <MDBNavLink to="/purchase">
                      <MDBIcon icon="shopping-cart" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/profile">
                      <MDBIcon icon="user-circle" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded-full"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </MDBNavItem>
                </>
              )}
              {!user.isSigned && (
                <>
                  <MDBNavItem>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 border-2 border-transparent rounded-full"
                      onClick={goToSignUpPage}
                    >
                      Sign Up
                    </button>
                  </MDBNavItem>
                  <MDBNavItem>
                    <button
                      className="bg-gray-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 rounded-full"
                      onClick={goToLoginPage}
                    >
                      Login
                    </button>
                  </MDBNavItem>
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
      <hr className="mt-0" />
    </>
  );
}

export default NavbarPage;
