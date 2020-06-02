/* eslint-disable no-empty */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';
import { FiSearch } from 'react-icons/fi';
import './search.scss';

class InputSearch extends Component {
  state = {
    query: '',
    results: [],
  }

  getInfo = () => {
    const { query } = this.state;
    axios.get(`https://restcountries.eu/rest/v2/name/${query}`)
      .then((res) => {
        this.setState({
          results: res.data,
        });
      });
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const { query } = this.state;
    this.setState({
      query: value,
    }, () => {
      if (query && query.length > 1) {
        if (query.length % 2 === 0) {
          this.getInfo();
        }
      }
      else if (!query) {}
    });
  }

  getSlugByName = (name) => slugify(name, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

  handleSubmit = (e) => {
    const { results } = this.state;
    e.preventDefault();
    document.location.assign(`/countries/#/search/${this.getSlugByName(results[0].name)}`);
  }

  truncStr = (string, limit) => (string.length > limit
    ? `${string
      .trim()
      .substring(0, limit - 3)
      .trim()}...`
    : string);

  render() {
    const { results, query } = this.state;
    document.title = `Country ${query.length !== 0 ? ' - ' : ''} ${query}`;
    return (
      <div className="search">
        <img src="https://i.imgur.com/nt1NKAi.jpg" alt="test" className="search-image" />
        <h1 className="search-title">Search countries</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search for..."
              onChange={this.handleInputChange}
            />
            <button type="button" className="search-button" onClick={this.handleSubmit}>
              <FiSearch />
            </button>
          </div>
          <ul className="search-ul">
            {
            results.slice(0, 10)
              .map((r) => (
                <NavLink key={r.name} to={`/search/${this.getSlugByName(r.name)}`} className="search-link">
                  <li
                    className="search-li"
                    onClick={() => {
                      this.setState({
                        query: r.name,
                      });
                    }}
                  >
                    {this.truncStr(r.name, 30)} <img src={r.flag} alt="Flag" className="search-li-flag" />
                  </li>
                </NavLink>
              ))
          }
          </ul>
        </form>
      </div>
    );
  }
}

export default InputSearch;
