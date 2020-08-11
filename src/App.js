import React from 'react';
import './i18n';
import { HashRouter, Route } from 'react-router-dom';
import SignPage from './pages/signup';
function App() {
  return (
    <HashRouter>
      <SignPage />
      <Route exact path="/"></Route>
    </HashRouter>
  );
}

export default App;
