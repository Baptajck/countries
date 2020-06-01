/* eslint-disable no-unused-expressions */
// == Import : npm
import React from 'react';

// == Import : local
import './switch.scss';

const { body } = document;

const theme = localStorage.getItem('theme');
const light = localStorage.getItem('light');

if (theme) {
  body.classList.add(theme);
  light && body.classList.add('light');
}

// == Composant
const SwitchTheme = () => (
  <div className="switch">
    <p className="switch-title">Thème: </p>
    <a
      id="light"
      className="switch-button"
      onClick={() => {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
      }}
    >light
    </a>
    <span className="switch-span"> / </span>
    <a
      id="dark"
      className="switch-button"
      onClick={() => {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
      }}
    >dark
    </a>
  </div>
);
// == Export
export default SwitchTheme;
