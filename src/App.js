import React from 'react';
import './i18n';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
import Footer from './components/Footer/Footer';

import AboutUsPage from './pages/AboutUsPage';
import AuthorPage from './pages/AuthorPage/AuthorPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import ContactUsPage from './pages/ContactUsPage';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/book/:bookId" component={BookPage} />
        <Route path="/aboutus" component={AboutUsPage} />

        <Route exact path="/contact" render={ContactUsPage} />

        <Route path="/purchase" component={PaymentPage} />

        <Route path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
