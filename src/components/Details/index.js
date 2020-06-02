/* eslint-disable no-unused-expressions */
// == Import : npm
import React, { Component } from 'react';
import axios from 'axios';

// == Import : local
import './details.scss';

// == Composant
class details extends Component {
    state = {
      country: [],
      spellings: [],
      currencies: [],
      borders: [],
      language: [],
      translation: [],
    }

  componentDidMount = () => {
    this.getInfo();
  }

  splitURL = () => {
    const url = document.location.hash;
    const a = url.split('/');
    const n = String(a[2]);
    const v = n.replace('-', ' ');
    return v;
  };

  getInfo = () => {
    axios.get(`https://restcountries.eu/rest/v2/name/${this.splitURL()}?fullText=true`)
      .then((res) => {
        this.setState({
          country: res.data[0],
          spellings: res.data[0].altSpellings,
          borders: res.data[0].borders,
          currencies: res.data[0].currencies[0],
          language: res.data[0].languages[0],
          translation: res.data[0].translations,
        });
      });
  }

  render() {
    const {
      country, spellings, borders, currencies, language, translation,
    } = this.state;
    document.title = `Country - ${this.splitURL()}`;
    return (
      <div className="details">
        <h2>Details</h2>
        <img src={country.flag} alt="flag" className="search-image" />
        <p>{country.name}</p>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <ul>
          {spellings.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>Population: {new Intl.NumberFormat('en-EN').format(country.population)}</p>
        <p>Demonym: {country.demonym}</p>
        <p>Area: {country.area}m²</p>
        <p>GINI Index: {(country.gini / 100)}</p>
        <ul>
          {borders.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>Native Name: {country.nativeName}</p>
        <ul>
          <li>Name Money: {currencies.name}</li>
          <li>Code Money: {currencies.code}</li>
          <li>Symbol Money: {currencies.symbol}</li>
        </ul>
        <ul>
          <li>{language.name}</li>
          <li>{language.nativeName}</li>
        </ul>
        <ul>
          <li>De: {translation.de}</li>
          <li>Es: {translation.es}</li>
          <li>Fr: {translation.fr}</li>
          <li>Ja: {translation.ja}</li>
          <li>It: {translation.it}</li>
          <li>Br: {translation.br}</li>
          <li>Pt: {translation.pt}</li>
          <li>Nl: {translation.nl}</li>
          <li>Hr: {translation.hr}</li>
          <li>Fa: {translation.fa}</li>
        </ul>
      </div>
    );
  }
}
// == Export
export default details;
