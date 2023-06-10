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
      <p>©2021 Created by Crypto Signals</p>
    </StyledFooter>
  );
};

export default Footer;
