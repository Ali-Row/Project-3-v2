import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function DeleteProduct(props) {
  return (
    <div className="item-to-delete">
      <form className="search">
        <div className="form-group">
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Which item do you want to delete?"
            id={props.inputType}
          />
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleProductIDGrab} className="btn btn-success">
            Search For Item
          </button>
        </div>
      </form>
      <form className="confirm-delete">
        <div className="form-group">
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.confirm}
            onChange={props.handleConfirm}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Are you sure? Type yes to confirm."
            id="confirm-delete"
          />
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleDeleteProduct} className="btn btn-success">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteProduct;
