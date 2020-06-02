// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';

import InputSearch from 'src/components/InputSearch';
import Details from 'src/components/Details';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Switch>
      <Route path="/search/:slug">
        <Details />
        <Footer />
      </Route>
      <Route exact path="/">
        <InputSearch />
        <Footer />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
