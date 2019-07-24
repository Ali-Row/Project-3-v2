import React from "react";
import "./style.css";

function DepartmentCard(props) {
  return (
    <div onClick={() => props.handleSelect(props.id)} className="card select">
      <div className="img-container">
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Department:</strong> {props.name}
          </li>
          <li>
            <strong>Profit: $</strong> {props.profit}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DepartmentCard;
