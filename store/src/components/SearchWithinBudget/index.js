import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchWithinBudget(props) {
  return (
    <div className="user-budget-input">
      <form className="search">
        <div className="form-group">
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <span>$ <input
            value={props.userBudget}
            onChange={props.handleBudgetChange}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="What is your budget?"
            id={props.inputType}
          /></span>
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleUserBudgetLimit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchWithinBudget;
