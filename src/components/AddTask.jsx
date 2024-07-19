import React from "react";
import { useState } from "react";

function AddTask({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [duedate, setDuedate] = useState();

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDuedate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, duedate);
    setDuedate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter task"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="date"
            id="date"
            value={duedate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
