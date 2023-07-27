import React from "react";
import { Button, Space } from "antd";

const OrderButton = () => {
  const handleButtonClick = () => {
    window.location.href = "https://t.me/your_telegram_page";
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Button type="primary" block onClick={handleButtonClick}>
        აქტივაცია
      </Button>
      <Button block>გაიარე კონსულტაცია</Button>
    </Space>
  );
};


export default OrderButton;
