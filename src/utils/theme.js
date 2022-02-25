export function setTheme(themeName) {
	localStorage.setItem('countries-baptjack-theme', themeName);
	document.documentElement.className = themeName;
}

export function keepTheme() {
	if (localStorage.getItem('countries-baptjack-theme')) {
		localStorage.getItem('countries-baptjack-theme') === 'theme-light'
			? setTheme('theme-light')
			: setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
}
