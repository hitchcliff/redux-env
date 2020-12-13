import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Todo } from "../../App";

export const todoAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      todoAdapter.addOne(state, payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      todoAdapter.removeOne(state, payload);
    },
    updateTodo: (
      state,
      { payload }: PayloadAction<{ id: number; title: string }>
    ) => {
      todoAdapter.updateOne(state, {
        id: payload.id,
        changes: { title: payload.title },
      });
    },
    toggleTodo: (
      state,
      { payload }: PayloadAction<{ id: number; status: string }>
    ) => {
      todoAdapter.updateOne(state, {
        id: payload.id,
        changes: {
          status: payload.status,
        },
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
} = todoSlice.actions;

// export const {
//   selectAll: todoSelectAll,
//   selectById: todoSelectById,
//   selectTotal: todoSelectTotal,
//   selectIds: todoSelectIds,
// } = todoAdapter.getSelectors();
