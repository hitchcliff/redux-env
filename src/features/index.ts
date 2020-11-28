import { todoSlice } from "./todo/todoSlice";
export const rootReducer = {
  todoItems: todoSlice.reducer,
};
