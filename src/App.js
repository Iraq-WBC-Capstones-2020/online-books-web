import React from 'react';
import './i18n';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
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
import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/" render={() => <MainPage />} />
        </Switch>
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;
