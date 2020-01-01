import React from "react";

const ElementRemove = props => {
  return (
    <li className="elements">
      <button className="rem3" onClick={() => props.take(props.id)}>x</button>
      <span>{props.todo} </span><span>(zrobić do:{props.date})</span>
      <span>-potwierdzenie wykonania: <span>{props.dateRemove}</span> </span>
      
    </li>
  );
};

export default ElementRemove;
