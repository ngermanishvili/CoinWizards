import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Button, Popover, Badge } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const searchEngine = "Google";
const Header = ({ isFirstScreen, isMobile }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuMode = isMobile ? "inline" : "horizontal";

  const handleMenuVisibleChange = (visible) => {
    setMenuVisible(visible);
  };

  const handleShowMenu = () => {
    setMenuVisible(true);
  };

  const handleHideMenu = () => {
    setMenuVisible(false);
  };

  const handleSelectFilter = (value, option) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };

  const headerClassName = classNames({
    clearfix: true,
    "home-nav-white": !isFirstScreen,
  });

  const menu = [
    <Button className="header-lang-button" ghost size="small" key="lang">
      English
    </Button>,
    <Menu mode={menuMode} defaultSelectedKeys={["home"]} id="nav" key="nav">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="docs/spec">Guide</Menu.Item>
      <Menu.Item key="docs/react">Components</Menu.Item>
      <Menu.Item key="docs/pattern">Patterns</Menu.Item>
      <Menu.Item key="docs/resource">Resources</Menu.Item>
      <Menu.Item key="pro">
        <a
          href="http://pro.ant.design"
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRO
          <span
            style={{
              display: "inline-block",
              position: "relative",
              top: -2,
              width: 18,
            }}
          >
            <Badge dot />
          </span>
        </a>
      </Menu.Item>
    </Menu>,
  ];

  return (
    <header id="header" className={headerClassName}>
      {menuMode === "inline" ? (
        <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={handleMenuVisibleChange}
        >
          <MenuOutlined className="nav-phone-icon" onClick={handleShowMenu} />
        </Popover>
      ) : null}
      <Row>
        <Col lg={4} md={5} sm={24} xs={24}>
          <a id="logo">
            <img
              alt="logo"
              src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
            />
            <span>Ant Design</span>
          </a>
        </Col>
        <Col lg={20} md={19} sm={0} xs={0}>
          {menuMode === "horizontal" ? menu : null}
        </Col>
      </Row>
    </header>
  );
};

Header.propTypes = {
  isFirstScreen: PropTypes.bool,
  isMobile: PropTypes.bool,
};

export default Header;
