import React from "react";

export default function Employee(props) {
  return (
    <>
      <div>Employee{props.name}</div>
      <p>{props.role}</p>
    </>
  );
}
