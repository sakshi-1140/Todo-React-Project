import React from "react";
import TodoItem from "./TodoItem";
import sytles from './TodoItems.module.css'

function TodoItems({ todoItems,onDeleteClick }) {
  return (
    <div className={sytles.itemContainer}>
      {todoItems.map((item) => {
        return <TodoItem todoName={item.name} todoDate={item.dueDate}
        onDeleteClick={onDeleteClick} />
      })}
    </div>
  );
}

export default TodoItems;
