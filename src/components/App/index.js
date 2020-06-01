// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

import InputSearch from 'src/components/InputSearch';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <InputSearch />
    <Footer />
  </div>
);

// == Export
export default App;
