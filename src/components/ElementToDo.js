import React from "react";


const ElementToDo = props => {
  //console.log(props.todo)
  if (props.priority) {
    return (
    
      <li >
       <button className="rem" onClick={() => props.place(props.id)}>Usuń</button>
        <button className="rem2" onClick={() => props.take(props.id)}>x</button>
       <span className="besidebutton" style={{ color: "#CC205D" }}>{props.todo}  </span> 
        <span className="lastpart"> zrobić do: {props.date} </span>
      </li>
      
     
       
    );
  } else if (props.priority === false) {
    return (
      
      <li>
      <button className="rem" onClick={() => props.place(props.id)}>Usuń</button>
        <button className="rem2" onClick={() => props.take(props.id)}>x</button>
      
       <span className="besidebutton">{props.todo} </span> 
        <span className="lastpart"> zrobić do: {props.date}</span>
      </li>
      
      
        
    );
  }
};

export default ElementToDo;
