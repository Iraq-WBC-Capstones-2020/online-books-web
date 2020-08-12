import React from 'react';
import './i18n';

import { HashRouter, Route } from 'react-router-dom';

import { HashRouter, Route } from 'react-router-dom';



import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/nav';
import Footer from './components/Footer/Footer';
import AboutUsPage from './pages/AboutUsPage';
import AuthorPage from './pages/AuthorPage/AuthorPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/loginPage/LoginPage';


>>>>>>> 6b6fbbbb6133cc105cb74ac9cd625abf95323dac
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/book/:bookId" render={() => <div>BookPage</div>} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route exact path="/contact" render={() => <div>ContactPage</div>} />
        <Route path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" render={() => <div>SignupPage</div>} />
        <Route path="/" render={() => <div>MainPage</div>} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
