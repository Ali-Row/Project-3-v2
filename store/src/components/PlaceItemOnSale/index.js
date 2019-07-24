import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function PlaceItemOnSale(props) {
  return (
    <div className="place-on-sale">
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
            placeholder="Which item do you want to place on sale?"
            id={props.inputType}
          />
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleSalePriceGrab} className="btn btn-success">
            Search For Item
          </button>
        </div>
      </form>
      <form className="add-to-sale">
        <div className="form-group">
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <span>$ <input
            value={props.newPrice}
            onChange={props.handlePriceChange}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="New Sale Price"
            id="new-sale-price"
          /></span>
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleOnSaleUpdate} className="btn btn-success">
            Place On Sale
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceItemOnSale;
