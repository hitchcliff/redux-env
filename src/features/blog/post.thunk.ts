import { createAsyncThunk } from "@reduxjs/toolkit";
import useBlogService from "../../app/Hooks/useBlogService";

export const fetchAllBlogs = createAsyncThunk("pos/fetchAllBlogs", async () => {
  const blogService = useBlogService();
  return blogService.getBlog();
});
