import React from "react";
import "./style.css";

function TeamCard(props) {
  return (
    <div className="profile-card select">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="team-info">
        <ul>
          <li>
            <strong>Team Member:</strong> {props.name}
          </li>
          <li>
            <strong>Github:</strong> {props.github}
          </li>
          <li>
            <strong>Portfolio:</strong> {props.portfolio}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
