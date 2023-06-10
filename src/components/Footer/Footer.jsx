import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  background-color: #001529;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </StyledFooter>
  );
};

export default Footer;
