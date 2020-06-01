/* eslint-disable no-unused-expressions */
// == Import : npm
import React from 'react';
import SwitchTheme from 'src/components/SwitchTheme';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <h2>Footer</h2>
    <SwitchTheme />
  </div>
);
// == Export
export default Footer;
