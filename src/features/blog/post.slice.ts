import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Posts } from "../../app/Blog/blog.types";
import useBlogService from "../../app/Hooks/useBlogService";

// thunk
export const fetchAllBlogs = createAsyncThunk("pos/fetchAllBlogs", async () => {
  const blogService = useBlogService();
  return blogService.getBlog();
});

export const postAdapter = createEntityAdapter<Posts>({
  selectId: (item) => item.id,
});

const initialState = {
  posts: postAdapter.getInitialState(),
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Posts>) => {
      postAdapter.addOne(state.posts, payload);
    },
    destroyTodo: (state, { payload }) => {
      postAdapter.removeOne(state.posts, payload);
    },
  },
  extraReducers: {
    [fetchAllBlogs.fulfilled.toString()]: (state, payload) => {
      postAdapter.addMany(state.posts, payload);
    },
  },
});

console.log(fetchAllBlogs());

export const { addTodo, destroyTodo } = postSlice.actions;
