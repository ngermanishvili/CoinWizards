import { Typography, Space } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2023
        <div>
          <Link to="/">CryptoWizards Inc.</Link> <br />
          <br /> All Rights Reserved.
        </div>
      </Typography.Title>
      <Space>
        <div className="foot-pad">
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </div>
      </Space>
    </div>
  );
};

export default Footer;
