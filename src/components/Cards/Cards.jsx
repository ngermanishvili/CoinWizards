import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import TimelineText from "../Timeline/Timeline";
import styled from "styled-components";

const { Meta } = Card;

const Cards = () => (
  <Wrapper>
    <CardContainer>
      <Card
        style={{ width: 350 }}
        cover={
          <img
            alt="example"
            src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title="Basic 28$"
        />
        <br />
        <TimelineText />
      </Card>
    </CardContainer>
    <CardContainer>
      <Card
        style={{ width: 350 }}
        cover={
          <img
            alt="example"
            src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title="Premium 40$"
        />
        <br />
        <TimelineText />
      </Card>
    </CardContainer>
    <CardContainer>
      <Card
        style={{ width: 350 }}
        cover={
          <img
            alt="example"
            src="https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title="Ultimate 56$"
        />
        <br />
        <TimelineText />
      </Card>
    </CardContainer>
  </Wrapper>
);

const Wrapper = styled.div`
margin-top: 600px;   
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  flex-basis: 30%;
`;

export default Cards;
