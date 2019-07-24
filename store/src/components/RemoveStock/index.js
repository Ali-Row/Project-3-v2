import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function RemoveStock(props) {
  return (
    <div className="decrease-item-stock">
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
            placeholder="Which item's stock has decreased?"
            id={props.inputType}
          />
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleStockLevelGrab} className="btn btn-success">
            Search For Item
          </button>
        </div>
      </form>
      <form className="add-to-stock">
        <div className="form-group">
          <input
            value={props.stockChangeAmount}
            onChange={props.handleStockChange}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Number of items to remove from stock count"
            id="new-stock-amount"
          />
          <datalist id="products">
            {props.products.map(product => (
              <option value={product} key={product} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleRemovedStock} className="btn btn-success">
            Remove Stock
          </button>
        </div>
      </form>
    </div>
  );
}

export default RemoveStock;
