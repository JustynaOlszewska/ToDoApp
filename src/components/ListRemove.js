import React from "react";
import ElementRemove from "./ElementRemove.js";
import '../style/LIstRemove.scss';

const ListRemove = props => {
  const listRemove = props.listRemove.map(list => {
    return (
      <ElementRemove
        dateRemove={list.dateRemove}
        date={list.date}
        take={props.take}
        key={list.id}
        id={list.id}
        todo={list.todo}
        priority={list.priority}
      />
    );
  });

  return (
    <div className="remove">
      <h1><span>Zadania wykonane({listRemove.length})</span></h1>
      {listRemove.length > 5 ? (
        <p>wyświetlonych jest 5 ostatnio zrobionych zadadań</p>
      ) : (
        ""
      )}
      <ul>{listRemove.slice(0, 5)}</ul>
    </div>
  );
};

export default ListRemove;
