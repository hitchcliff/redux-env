export interface UserPost {
  displayName: string;
  uid: string;
}

export interface Sample {
  posts: Posts[];
}

export interface Posts {
  id: string;
  title: string;
  content: string;
}
