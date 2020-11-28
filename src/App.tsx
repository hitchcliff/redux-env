import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import TodoMapper from "./components/TodoMapper";
import { addTodo, todoSlice, deleteTodo } from "./features/todo/todoSlice";

export interface Todo {
  id: number;
  title: string;
  status: string;
}

export enum TodoStatus {
  Complete = "complete",
  Incomplete = "incomplete",
  Inprogress = "inprogress",
}

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [title, set] = useState<string>("");
  const dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      status: TodoStatus.Incomplete,
    };

    setTodoItems(todoItems.concat(newTodo));
    dispatch(addTodo(newTodo)); // dispatch
    set("");
  }

  function handleClickDelete(id: number) {
    const filter = todoItems.filter((item) => item.id !== id);
    setTodoItems(filter);
    dispatch(deleteTodo(id));
  }

  return (
    <div className="App">
      hello world
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="add"
          placeholder="enter todo"
          required={true}
          value={title}
          onChange={(e) => set(e.currentTarget.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        <TodoMapper handleDelete={handleClickDelete} />
      </ul>
    </div>
  );
}

export default App;
