import React from 'react';
import './i18n';
import { HashRouter, Route } from 'react-router-dom';
import FormPage from './pages/log';
function App() {
  return (
    <HashRouter>
      <FormPage />
      <Route exact path="/">
        <h1>Online Book</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
