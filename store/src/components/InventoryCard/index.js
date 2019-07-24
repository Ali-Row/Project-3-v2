import React from "react";
import "./style.css";

function InventoryCard(props) {
  return (
    <div onClick={() => props.handleSelect(props.id)} className="card select">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Product:</strong> {props.name}
          </li>
          <li>
            <strong>Price: $</strong> {props.price}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InventoryCard;
