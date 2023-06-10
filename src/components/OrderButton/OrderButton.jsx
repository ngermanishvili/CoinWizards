import React from "react";
import { Button, Space } from "antd";

const App = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
  </Space>
);

export default App;
