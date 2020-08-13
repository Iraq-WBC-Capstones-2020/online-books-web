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
import BookPage from './Pages/BookPage/BookPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/book/:bookId" component={BookPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/purchase" component={PaymentPage} />
        <Route exact path="/contact" render={() => <div>ContactPage</div>} />
        <Route path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" render={() => <div>SignupPage</div>} />
        <Route exact path="/" component={MainPage} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
