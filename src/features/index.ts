import { postSlice } from "./blog/post.slice";

export const rootReducer = {
  blog: postSlice.reducer,
};
