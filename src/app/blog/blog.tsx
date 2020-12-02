import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import { DocumentData } from "@firebase/firestore-types";
import AddBlog from "./addBlog";
import PostsContent from "./posts";
import { firestore } from "../../firebase";
import { BlogService } from "../../api";
import useBlogService from "../Hooks/useBlogService";
import { useDispatch } from "react-redux";
import { fetchAllBlogs } from "../../features/blog/post.thunk";

const { Title } = Typography;
const { Content } = Layout;

export default function Blog() {
  return (
    <Layout style={{ padding: "50px" }}>
      <Title level={3}>Kevin's blog</Title>
      <AddBlog />
      <Content>
        <PostsContent />
      </Content>
    </Layout>
  );
}
