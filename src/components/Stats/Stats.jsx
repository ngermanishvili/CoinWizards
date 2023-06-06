import React from "react";
import { Alert, Space } from "antd";

const Stats = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Alert
      message="Crypto Signal"
      description="Buy Bitcoin now at a great price!"
      type="success"
    />
    {/* <Alert
      message="Crypto Signal"
      description="Ethereum showing positive trends!"
      type="info"
    />
    <Alert
      message="Crypto Signal"
      description="Exercise caution with Dogecoin!"
      type="warning"
    />
    <Alert
      message="Crypto Signal"
      description="Sell Ripple before it drops further!"
      type="error"
    /> */}
  </Space>
);

export const Stats2 = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Alert
      message="Crypto Signal"
      description="თორნიკე გამოგვიყლეცდა ძმებოოო !"
      type="warning"
    />
  </Space>
);

export const Stats3 = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Alert
      message="Crypto Signal"
      description="თორნიკე გამოგვიყლეცდა ძმებოოო !"
      type="error"
    />
  </Space>
);

export default Stats;
