import React from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    children: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    icon: <FundOutlined />,
    children: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "3",
    icon: <MoneyCollectOutlined />,
    children: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "4",
    icon: <BulbOutlined />,
    children: <Link to="/news">News</Link>,
  },
];

export default menuItems;
