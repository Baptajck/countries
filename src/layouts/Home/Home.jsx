import { useState, useEffect } from 'react';
import s from './Home.module.scss';

import Card from '../../components/Card/Card';

const Home = () => {
	const [countries, setCountries] = useState([]);

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
		<main className={s.home}>
			<section className={s.cards}>
				{countries.map((country, i) => (
					<Card
						key={i}
						name={country.name}
						region={country.region}
						flag={country.flags.png}
						capital={country.capital}
						population={country.population}
					/>
				))}
			</section>
		</main>
	);
};

export default Home;
