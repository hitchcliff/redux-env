import React from "react";
import "./App.css";
import { Layout } from "antd";

import { Blog } from "./app/index";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Blog />
      </Content>
    </Layout>
  );
}

export default App;
