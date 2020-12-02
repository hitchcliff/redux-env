import { firestore } from "../../firebase";
import BlogService from "../../api/BlogService/blogService";

// hooks will be used in async thunk and components
export default function useBlogService() {
  return new BlogService(firestore);
}
