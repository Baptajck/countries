import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';

const Header = () => {
	const [changeTheme, setChangeTheme] = useState(false);

	return (
		<header className={s.header}>
			<NavLink to='/countries' className={s.link}>
				<h1 className={s.title}>Where in the world?</h1>
			</NavLink>
			<SwitchTheme changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
		</header>
	);
};

export default Header;
