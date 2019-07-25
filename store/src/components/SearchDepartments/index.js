import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchDepartments(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor={props.inputType}>{props.inputType}</label>
        <input
          value={props.department}
          onChange={props.handleDepartmentChange}
          name={props.inputType}
          list={props.databaseTable}
          type="text"
          className="form-control"
          placeholder="Choose a department (e.g. Toys, Sports)"
          id={props.inputType}
        />
        <datalist id="departments">
          {props.departments.map(product => (
            <option value={product} key={product} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleDepartmentSearch} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchDepartments;
