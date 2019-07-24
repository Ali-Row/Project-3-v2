import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <h1 id="returned-product" className="mysql-data">{result}</h1>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
