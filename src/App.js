import React,{ useState }  from 'react';
import './i18n';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Pages/nav';
import Footer from './components/Footer/Footer';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import AuthorPage from './Pages/AuthorPage/AuthorPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import LoginPage from './Pages/loginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';
import BookPage from './Pages/BookPage/BookPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';

function App() {
  const user = useSelector((state) => state.user);
  const [modal8, handelModel8] = useState(false);

  return (
    <HashRouter>
      <Navbar handelModel8={handelModel8}/>
      <Switch>
        <Route exact path="/book/:bookId" component={BookPage} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Route exact path="/contact" render={ContactUsPage} />
        <Route exact path="/purchase">
          {user.isSigned ? <PaymentPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/profile">
          {user.isSigned ? <ProfilePage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {!user.isSigned ? <LoginPage /> : <Redirect to="/profile" />}
        </Route>
        <Route exact path="/signup">
          {!user.isSigned ? <SignUpPage /> : <Redirect to="/profile" />}
        </Route>
        <Route path="/">
          <MainPage modal8={modal8} handelModel8={handelModel8}/>
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
