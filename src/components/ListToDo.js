import React from "react";
import ElementToDo from "./ElementToDo.js";
import "../style/ToDo.scss";
const ListToDo = props => {
  const listToDo = props.listToDo.map(list => {
    return (
      <ElementToDo
        date={list.date}
        place={props.place}
        take={props.take}
        priority={list.priority}
        key={list.id}
        id={list.id}
        todo={list.todo}
      />
    );
  });

  return (
    <div className="todo">
      <h1><span>Lista zadań do zrobienia</span></h1>
      <ul>{listToDo.length ? listToDo : <p>W chwili obecnej nie masz zadań do wykonania.</p>}</ul>
    </div>
  );
};

export default ListToDo;
