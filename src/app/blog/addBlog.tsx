import { Button, Form, Input } from "antd";
import React from "react";
import useBlogService from "../Hooks/useBlogService";
import { DocumentData } from "@firebase/firestore-types";

interface AddBlogProps {}

export default function AddBlog({}: AddBlogProps) {
  const blogService = useBlogService();
  console.log(blogService);

  function onFinish(values: DocumentData) {
    const newPosts = {
      id: "",
      title: values.title,
      content: values.content,
    };

    blogService.addBlog(newPosts);
  }

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Title" required={true}>
        <Input />
      </Form.Item>
      <Form.Item name="content" label="Content" required={true}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
