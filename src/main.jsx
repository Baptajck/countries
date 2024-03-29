import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.scss';
import App from './common/App/App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
