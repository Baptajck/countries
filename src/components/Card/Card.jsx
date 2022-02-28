import PropTypes from 'prop-types';
import s from './Card.module.scss';

const Card = ({
	name = '',
	region = '',
	flag = '',
	capital = '',
	population = 0,
}) => {
	return (
		<article className={s.card}>
			<img src={flag} alt={name} className={s.image} />

			<div className={s.infos}>
				<h2 className={s.title}>{name}</h2>
				<p className={s.info}>
					Population: <span className={s.infoDetail}>{population}</span>
				</p>
				<p className={s.info}>
					Region: <span className={s.infoDetail}>{region}</span>
				</p>
				<p className={s.info}>
					Capital: <span className={s.infoDetail}>{capital}</span>
				</p>
			</div>
		</article>
	);
};

Card.propTypes = {
	capital: PropTypes.string,
	flag: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	population: PropTypes.number.isRequired,
	region: PropTypes.string.isRequired,
};

export default Card;
