import { useEffect, useState, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';

import { keepTheme } from '../../utils/theme';
import { CountriesProvider } from '../../context/CountriesContext';
import Home from '../../layouts/Home/Home';
import Header from '../../layouts/Header/Header';
import CountryDetails from '../../layouts/CountryDetails/CountryDetails';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [changeTheme, setChangeTheme] = useState(false);

	useEffect(() => {
		keepTheme();
	}, []);

	useEffect(async () => {
		try {
			const res = await fetch('https://restcountries.com/v2/all');
			const data = await res.json();
			setCountries(data);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className={s.app}>
			<CountriesProvider value={countries}>
				<Header />
				<main>
					<Routes>
						<Route path='/countries' element={<Home />} />
						<Route path='/countries/:slug' element={<CountryDetails />} />
					</Routes>
				</main>
			</CountriesProvider>
		</div>
	);
};

export default App;
