import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchSaleItems(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor={props.inputType}>{props.inputType}</label>
        <datalist id="products">
          {props.products.map(product => (
            <option value={product} key={product} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleSaleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchSaleItems;
