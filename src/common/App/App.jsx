import { useEffect, useState } from 'react';
import s from './App.module.scss';

import { keepTheme } from '../../utils/theme';

import Home from '../../layouts/Home/Home';
import Header from '../../layouts/Header/Header';

const App = () => {
	const [changeTheme, setChangeTheme] = useState(false);

	useEffect(() => {
		keepTheme();
	}, []);

	return (
		<div className={s.app}>
			<Header />
			<Home />
		</div>
	);
};

export default App;
