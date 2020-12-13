import { firestore } from "../../firebase";
import { BlogService } from "../../api";

// hooks will be used in async thunk if `READ` and components
export default function useBlogService() {
  return new BlogService(firestore);
}
