import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import coinwizards from "../images/wizard3.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "HOME",
      path: "/",
    },
    {
      key: "2",
      icon: <FundOutlined />,
      label: "CRYPTOCURRENCIES",
      path: "/cryptocurrencies",
    },
    {
      key: "3",
      icon: <MoneyCollectOutlined />,
      label: "EXCHANGES",
      path: "/exchanges",
    },
    {
      key: "4",
      icon: <BulbOutlined />,
      label: "NEWS",
      path: "/news",
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/">
            <img src={coinwizards} className="wizards" />
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" selectedKeys={[location.pathname]}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
