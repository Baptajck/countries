/* eslint-disable react/prop-types */
import React from 'react';

const Suggestions = (props) => {
  const truncStr = (string, limit) => (string.length > limit
    ? `${string
      .trim()
      .substring(0, limit - 3)
      .trim()}...`
    : string);
  const { results } = props;
  const options = results.slice(0, 10)
    .map((r) => (
      <li key={r.name} className="search-li">
        {truncStr(r.name, 30)}
      </li>
    ));
  return <ul className="search-ul">{options}</ul>;
};

export default Suggestions;
