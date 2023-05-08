import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodoList from "./components/NewTodoList";
import LeftTask from "./components/LeftTask";

const Dummy_TodoList = [
  { title: "read book", checked: false },
  { title: "do exercise", checked: false },
  { title: "buy groceiry", checked: true },
];

function App() {
  const [todoLists, setTodolists] = useState(Dummy_TodoList);
  const addTodoListHandler = (newTodoList) => {
    console.log(newTodoList, "mmmm");
    setTodolists([newTodoList, ...todoLists]);
  };
  return (
    <div className="App">
      <div className="container">
        <NewTodoList onAddNewTodoData={addTodoListHandler} />
        <LeftTask listData={todoLists} />
        <TodoList listData={todoLists} />
      </div>
    </div>
  );
}
export default App;
