import { useContext, useEffect, useState } from 'react';
import s from './CountryDetails.module.scss';
import { useNavigate, useParams, NavLink } from 'react-router-dom';

import { CountriesContext } from '../../context/CountriesContext';

import ArrowBack from '../../assets/svg/arrow-back-outline.svg?component';

const CountryDetails = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const countries = useContext(CountriesContext);
	const [country, setCountry] = useState({});

	useEffect(() => {
		const country = countries?.find(
			country => country.alpha3Code.toLowerCase() === slug
		);
		setCountry(country);
	}, [countries, slug]);

	return (
		<div className={s.countryDetails}>
			<div className={s.containerButton}>
				<button className={s.button} onClick={() => navigate(-1)}>
					<span className={s.buttonIcon}>
						<ArrowBack />
					</span>
					Back
				</button>
				<div className={s.containerInfos}>
					<img src={country?.flag} alt={country?.name} className={s.flag} />
					<div className={s.infos}>
						<h1 className={s.name}>{country?.name}</h1>
						<div className={s.infosListGroup}>
							<section className={s.infoList}>
								<p className={s.info}>
									Native Name: <span>{country?.nativeName}</span>
								</p>
								<p className={s.info}>
									Population:{' '}
									<span>
										{new Intl.NumberFormat('en-EN').format(country?.population)}
									</span>
								</p>
								<p className={s.info}>
									Region: <span>{country?.region}</span>
								</p>
								<p className={s.info}>
									Sub Region: <span>{country?.subregion}</span>
								</p>
								{!!country?.capital && (
									<p className={s.info}>
										Capital: <span>{country?.capital}</span>
									</p>
								)}
							</section>
							<section className={s.infoList}>
								<p className={s.info}>
									Top Level Domain: <span>{country?.topLevelDomain}</span>
								</p>
								<p className={s.info}>
									Currencies:{' '}
									<span>
										{country?.currencies
											?.map(currency => currency.name)
											.join(', ')}
									</span>
								</p>
								<p className={s.info}>
									Languages:{' '}
									<span>
										{country?.languages
											?.map(language => language.name)
											.join(', ')}
									</span>
								</p>
							</section>
						</div>
						{!!country?.borders && (
							<div className={s.borderCountries}>
								<h3 className={s.title}>Border Countries:</h3>
								<div className={s.list}>
									{country?.borders?.map(border => {
										let countryBorder = countries.find(
											country => country.alpha3Code === border
										);
										return (
											<NavLink
												to={`/${countryBorder?.alpha3Code.toLowerCase()}`}
												className={s.item}
											>
												{countryBorder?.name}
											</NavLink>
										);
									})}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
