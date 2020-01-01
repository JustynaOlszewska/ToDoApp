import React from "react";
import '../style/Header.scss';

const Header = props => {
  const now = new Date();
  const nowTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const futureTime = `${now.getFullYear() + 1}-${now.getMonth() +
    1}-${now.getDate()}`;
  // console.log(futureTime, nowTime)
  return (
 

    <form onSubmit={props.submit}>
      <label className="text">
        Dodaj zadanie:{" "}
        <input     
          onChange={props.change}
          name="text"
          value={props.state.text}
          type="text"
        />
      </label>
      <label className="checkbox">
        {" "}
        Priorytet
        <input
          onChange={props.change}
          name="checkbox"
          checked={props.state.checkbox}
          type="checkbox"
        />
        <span></span>
      </label>
      <label className="date">
        Maksymalny czas na wykonanie zadania:{" "}
        <input
          onChange={props.change}
          name="date"
          min={nowTime}
          max={futureTime}
          value={props.state.date}
          type="date"
        />
      </label>
      <button className="buttonform">Dodaj</button>
    </form>
    /*style={props.check ? {color:"red"} : {color:"black"}}*/
    /*className={props.checkbox ? "red" : undefined}*/
 
  );
};

export default Header;
