import React from "react";
import { Layout, Typography } from "antd";
import AddBlog from "./AddBlog";
import PostsContent from "./Posts";

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
