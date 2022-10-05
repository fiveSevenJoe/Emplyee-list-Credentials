import React from "react";

export default function Employee(props) {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img className="pic" src={props.img} alt="people"></img>
        </div>
        <div className="in-div">
          <div className="header">{props.name}</div>
          <p>{props.role}</p>
          <button className="btn">Message</button>
        </div>
      </div>
    </div>
  );
}
