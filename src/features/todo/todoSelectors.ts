import { createSelector } from "@reduxjs/toolkit";
import { TodoStatus } from "../../App";
import { RootState } from "../../store";
import { todoAdapter } from "./todoSlice";

export const todoSelector = todoAdapter.getSelectors(
  (state: RootState) => state.todoItems
);

// get all todos
export const todoSelectAll = createSelector(
  todoSelector.selectAll,
  (todo) => todo
);

// select by complete
export const todoSelectByComplete = createSelector(
  todoSelector.selectAll,
  (todo) => todo.filter((t) => t.status === TodoStatus.Complete)
);

// select by incomplete
export const todoSelectByIncomplete = createSelector(
  todoSelector.selectAll,
  (todo) => todo.filter((t) => t.status === TodoStatus.Incomplete)
);

// select all by status: inprogress
export const todoSelectByInProgress = createSelector(
  todoSelector.selectAll,
  (todo) => todo.filter((t) => t.status === TodoStatus.Inprogress)
);

// get all total
export const todoSelectByTotal = createSelector(
  todoSelector.selectTotal,
  (todo) => todo
);

// select by ids
export const todoSelectByIds = createSelector(
  todoSelector.selectIds,
  (todo) => todo
);

// select by entities
export const todoSelectEntities = createSelector(
  todoSelector.selectEntities,
  (todo) => todo
);

// success, chrome devtools
// test