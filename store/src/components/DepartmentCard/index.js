import React from "react";
import "./style.css";

function DepartmentCard(props) {
  return (
    <div className="department-card select">
      <div className="img-empty">
      </div>
      <div className="department-information">
        <ul>
          <li>
            <strong>Department:</strong> {props.name}
          </li>
          <li>
            <strong>Overhead: $</strong> {props.overhead}
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
