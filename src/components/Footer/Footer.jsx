import { Typography, Space } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2021
        <Link to="/">Cryptoverse Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
