import React from 'react';
import './i18n';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/nav';
import Footer from './components/Footer/Footer';


import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import AuthorPage from './Pages/AuthorPage/AuthorPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import LoginPage from './Pages/loginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import BookPage from './Pages/BookPage/BookPage';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/book/:bookId" render={() => <div>BookPage</div>}

        <Route exact path="/contact" render={ContactUsPage} />
        <Route path="/purchase" component={PaymentPage} />
        <Route path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/" render={() => <MainPage />} />

      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
