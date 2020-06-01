import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './suggestions';
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

  render() {
    const { results, query } = this.state;
    return (
      <div className="search">
        <h1 className="search-title">Search countries</h1>
        <form className="search-form">
          <input
            type="search"
            className="search-input"
            placeholder="Search for..."
            onChange={this.handleInputChange}
          />
          {query.length !== 0 && <Suggestions results={results} />}
        </form>
      </div>
    );
  }
}

export default InputSearch;
