import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UpdateProduct(props) {
  return (
    <div className="create-new-product">
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
            placeholder="Which item do you want to update?"
            id={props.inputType}
          />
          <button type="submit" onClick={props.handleProductUpdateGrab} className="btn btn-success">
            Search For Item
          </button>
        </div>
      </form>
      <form className="create-form">
        <div className="form-group">
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.productName}
            onChange={props.handleProductName}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Product Name (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.productType}
            onChange={props.handleProductType}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Product Type (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.productImage}
            onChange={props.handleProductImage}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Product Image (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.departmentName}
            onChange={props.handleDepartmentName}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Department Name (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.rowID}
            onChange={props.handleRowID}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Row ID (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.columnID}
            onChange={props.handleColumnID}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Column ID (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.shelfID}
            onChange={props.handleShelfID}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Shelf ID (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.price}
            onChange={props.handlePrice}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Product Price (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.salePrice}
            onChange={props.handleSalePrice}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Sale Price (optional)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.productQuantity}
            onChange={props.handleProductQuantity}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Product Quantity In Stock (required)"
            id={props.inputType}
          />
          <label htmlFor={props.inputType}>{props.inputType}</label>
          <input
            value={props.onSale}
            onChange={props.handleSaleStatus}
            name={props.inputType}
            list={props.databaseTable}
            type="text"
            className="form-control"
            placeholder="Is this product on sale? (type yes or no)"
            id={props.inputType}
          />
          <button type="submit" onClick={props.handleUpdateProduct} className="btn btn-success">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
