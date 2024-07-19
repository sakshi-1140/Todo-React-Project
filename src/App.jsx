import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "9/10/22",
  //   },
  //   {
  //     name: "Go Shopping",
  //     dueDate: "10/10/22",
  //   },
  //   {
  //     name: "Do Homework",
  //     dueDate: "11/10/22",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=> item.name!==todoItemName);
    console.log(`Item Deleted:${todoItemName}`)
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTask onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
