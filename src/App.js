import React from 'react';
import './i18n';
import { HashRouter, Route } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Route exact path="/">
        <h1>Online Book</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
