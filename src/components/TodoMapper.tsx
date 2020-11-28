import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoStatus } from "../App";
import {
  todoSelectAll,
  todoSelectByComplete,
  todoSelectByTotal,
  todoSelectEntities,
  todoSelector,
} from "../features/todo/todoSelectors";
import { updateTodo, toggleTodo } from "../features/todo/todoSlice";
import { RootState } from "../store";

interface TodoMapperProps {
  handleDelete: (id: number) => void;
}

export default function TodoMapper({ handleDelete }: TodoMapperProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [editingCurrentId, setEditingCurrentId] = useState<number>(0);
  const [status, setStatus] = useState<string>(TodoStatus.Complete);
  const dispatch = useDispatch();

  // selectors
  const todos = useSelector(todoSelectAll);
  const todoComplete = useSelector(todoSelectByComplete);
  const todoTotal = useSelector(todoSelectByTotal);
  const todoEntities = useSelector(todoSelectEntities);
  const todoId = useSelector((state: RootState) =>
    todoSelector.selectById(state, editingCurrentId)
  );

  function turnOnEdit(str: string, id: number) {
    if (!title.length) {
      setTitle(str);
    }
    if (todoId?.id === id) {
      return (
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <select onChange={(e) => setStatus(e.currentTarget.value)}>
            <option value={TodoStatus.Complete}>Complete</option>
            <option value={TodoStatus.Incomplete}>Incomplete</option>
            <option value={TodoStatus.Inprogress}>Inprogress</option>
          </select>
        </div>
      );
    }
  }

  function handleSave(id: number) {
    setEditingCurrentId(0);
    dispatch(updateTodo({ id, title })); // dispatch update todo
    if (!status.length) return;
    dispatch(toggleTodo({ id, status })); // dispatch todo
  }

  function handleEdit(id: number) {
    setEdit(!edit);
    setEditingCurrentId(id);
    if (editingCurrentId === id) {
      handleSave(id);
    }
  }

  const map = todos.map((todo) => (
    <li key={todo.id}>
      {!edit ? todo.title : turnOnEdit(todo.title, todo.id)}
      <button onClick={() => handleDelete(todo.id)}>x</button>
      <button onClick={() => handleEdit(todo.id)}>
        {edit ? "save" : "edit"}
      </button>
    </li>
  ));

  return <div>{map}</div>;
}
