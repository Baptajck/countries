import { useEffect, useState } from 'react';
import s from './Header.module.scss';

import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';

const Header = () => {
	const [changeTheme, setChangeTheme] = useState(false);

	return (
		<header className={s.header}>
			<h1 className={s.title}>Where in the world?</h1>
			<SwitchTheme changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
		</header>
	);
};

export default Header;
