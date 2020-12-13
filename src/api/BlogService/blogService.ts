import {
  FirebaseFirestore,
  CollectionReference,
} from "@firebase/firestore-types";
import { Dispatch } from "@reduxjs/toolkit";
import { Posts } from "../../app/Blog/blog.types";
import { addTodo, destroyTodo } from "../../features/blog/post.slice";
import Store from "../../Store";

// will be called in hooks
export default class BlogService {
  private db: FirebaseFirestore;
  private postsRef: CollectionReference;
  private dispatch: Dispatch = Store.dispatch;

  constructor(db: FirebaseFirestore) {
    this.db = db;
    this.postsRef = this.db.collection("posts");
  }

  async addBlog(post: Posts) {
    const docRef = await this.postsRef.add(post);
    const doc = await docRef.get();
    const data = doc.data() as Posts;

    this.dispatch(
      addTodo({
        id: doc.id,
        title: data?.title,
        content: data?.content,
      })
    );
  }

  async getBlog() {
    const snapshot = await this.postsRef.get();
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
      };
    });
  }

  async destroyBlog(id: string) {
    await this.postsRef.doc(id).delete();
    this.dispatch(destroyTodo(id));
  }
}
