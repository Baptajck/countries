import { useState, useEffect, useRef } from 'react';
import s from './Home.module.scss';

import SearchIcon from '../../assets/svg/search-outline.svg?component';
import ChevronDown from '../../assets/svg/chevron-down-outline.svg?component';

import Card from '../../components/Card/Card';

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState('');
	const [searchCountries, setSearchCountries] = useState([]);
	const [regionCountries, setRegionCountries] = useState('');
	const [region, setRegion] = useState([
		'Africa',
		'Americas',
		'Asia',
		'Europe',
		'Oceania',
	]);
	const refDetails = useRef(null);

	useEffect(async () => {
		try {
			const res = await fetch('https://restcountries.com/v2/all');
			const data = await res.json();
			setCountries(data);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		const results = countries.filter(country => {
			if (regionCountries === '') {
				return country.name.toLowerCase().includes(search.toLowerCase());
			} else {
				return (
					country.name.toLowerCase().includes(search.toLowerCase()) &&
					country.region.toLowerCase() === regionCountries.toLowerCase()
				);
			}
		});
		setSearchCountries(results);
	}, [search, regionCountries, countries]);

	return (
		<main
			className={s.home}
			onClick={() => refDetails.current.removeAttribute('open')}
		>
			<div className={s.containerFilter}>
				<div className={s.search}>
					<div className={s.searchIcon}>
						<SearchIcon />
					</div>
					<input
						className={s.searchInput}
						type='search'
						onChange={e => setSearch(e.target.value)}
						placeholder='Search for a country...'
					/>
				</div>
				<div className={s.region}>
					<details ref={refDetails} className={s.details}>
						<summary className={s.summary}>
							{regionCountries === '' ? 'Filter by region' : regionCountries}
							<span className={s.summaryIcon}>
								<ChevronDown />
							</span>
						</summary>
						<ul className={s.regionList}>
							{region.map(item => (
								<li
									key={item}
									onClick={e => {
										setRegionCountries(item);
										refDetails.current.removeAttribute('open');
									}}
									className={s.regionItem}
								>
									{item}
								</li>
							))}
						</ul>
					</details>
				</div>
			</div>
			<section className={s.cards}>
				{searchCountries.map((country, i) => (
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
