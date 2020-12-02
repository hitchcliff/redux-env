import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import { HighlightOutlined } from "@ant-design/icons";
import { Posts } from "../blog.types";
import { DocumentData } from "@firebase/firestore-types";
import useBlogService from "../Hooks/useBlogService";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../features/blog/post.thunk";
import { selectAllBlogSelector } from "../../features/blog/post.selector";

const { Meta } = Card;
const { Paragraph } = Typography;

enum POST {
  Edit = "edit",
  Update = "update",
}

export default function PostsContent() {
  const blogService = useBlogService();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllBlogSelector);

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  return (
    <Row>
      {posts.map((post) => {
        return (
          <Col key={post.id} span={8}>
            <Card title={post.title}>
              <Paragraph
                editable={{
                  tooltip: "Edit",
                  icon: <HighlightOutlined />,
                }}
              >
                {post.content}
              </Paragraph>
              <button onClick={() => blogService.destroyBlog(post.id)}>
                delete
              </button>
              <button onClick={() => console.log("tes")}>update</button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
