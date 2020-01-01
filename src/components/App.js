import React, { Component } from "react";
import Header from "./Header.js";
import ListToDo from "./ListToDo.js";
import ListRemove from "./ListRemove.js";
import "./ListRemove.js";
import "../style/App.scss";

class App extends Component {
  counter=4
  state = {
    text: "",
    checkbox: false,
    date: "",
    listToDo: [
      {
        id: 0,
        todo: "Zrób wszystkie ramki",
        priority: false,
        date: "",
        dateRemove: ""
      },
      { id: 1, todo: "Zatankuj", priority: false, date: "", dateRemove: "" },
      {
        id: 2,
        todo: "Znajdź pracę",
        priority: false,
        date: "",
        dateRemove: ""
      },
      { id: 3, todo: "Kup książki", priority: false, date: "", dateRemove: "" }
    ],
    changePlace: []
  };
  handleInputChange = e => {
    const name = e.target.name;

    if (name === "text" || name === "date") {
      this.setState({
        [name]: e.target.value
      });
    } else if (name === "checkbox") {
      this.setState({
        [name]: e.target.checked
      });
    }
  };
  handleButtonChangePlace = id => {
    const listToDo = [...this.state.listToDo];
    const restList = listToDo.filter(list => list.id !== id);
    this.setState({
      listToDo: restList
   
    });
       console.log(id)
    const now = new Date();
    const nowEverything = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}   ${
      now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
    } : ${
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
    } : ${now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()}`;
    const removedList = listToDo.filter(list => list.id === id);

    removedList.map(remove => (
      console.log(id),
      this.setState({
        changePlace: this.state.changePlace
          .concat({
            id: remove.id,
            todo: remove.todo,
            priority: remove.priority,
            date: remove.date,
            dateRemove: nowEverything
          })
          .sort(function(a, b) {
            return new Date(b.dateRemove) - new Date(a.dateRemove);
          })
          .reverse()
      })
    ))
  };

  handlButtonRemove = id => {
    const listToDo = [...this.state.listToDo];
    const index = listToDo.filter(list => list.id !== id);
    console.log(id)
    this.setState({
      listToDo: index
    });
  
  };
  handlButtonRemoveSecondList = id => {
    const changePlace = [...this.state.changePlace];
    const index = changePlace.filter(list => list.id !== id);
    console.log(id)
    this.setState({
      changePlace: index
    });
   
  };
  handleSubmitForm = e => {
    e.preventDefault();

    const value = this.state.text;
    const listToDo = this.state.listToDo;
this.counter++;
    this.setState({
      listToDo: listToDo
        .concat({
          id: this.counter,
          todo: value,
          priority: this.state.checkbox,
          date: this.state.date
        })
        .sort(function(a, b) {
          return a.todo.localeCompare(b.todo);
        }),
        text: ""
    });
   
  };
  render() {
   
    return (
      <React.Fragment>
       <div className="wholepage">
        <h1 className="firstpart"><span>Zorganizuj sobie czas</span></h1>
        <Header
          checkbox={this.state.checkbox}
          submit={this.handleSubmitForm}
          change={this.handleInputChange}
          state={this.state}
        />
        <ListToDo
          place={this.handleButtonChangePlace}
          take={this.handlButtonRemove}
          listToDo={this.state.listToDo}
        /> 
        <ListRemove
          take={this.handlButtonRemoveSecondList}
          listRemove={this.state.changePlace}
        />
       </div>
      </React.Fragment>
    );
  }
}
export default App;
