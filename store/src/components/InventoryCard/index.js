import React from "react";
import "./style.css";

function InventoryCard(props) {
  return (
    <div onClick={() => props.handleSelect(props.id)} className="inventory-card select">
      <div className="img-holder">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="product-information">
        <ul>
          <li>
            <strong>Product:</strong> {props.name}
          </li>
          <li>
            <strong>Quantity in store:</strong> {props.quantityInStore}
          </li>
          <li>
            <strong>Price: $</strong> {props.price}
          </li>
          <li>
            <strong>Sale Price: $</strong> {props.salePrice}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InventoryCard;
