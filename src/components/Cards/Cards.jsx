import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Row, Col } from "antd";
import TimelineText from "../Timeline/Timeline";
import styled from "styled-components";
import OrderButton from "../OrderButton/OrderButton";

const { Meta } = Card;

const Cards = () => (
  <Wrapper>
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Basic 28$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Premium 40$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Ultimate 56$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Ultimate 56$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Ultimate 56$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card
          style={{ width: "80%" }}
          cover={
            <img
              alt="example"
              src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Ultimate 56$"
          />
          <br />
          <TimelineText />
          <OrderButton />
        </Card>
      </Col>
    </Row>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 300px;
  padding: 16px;
`;

export default Cards;
