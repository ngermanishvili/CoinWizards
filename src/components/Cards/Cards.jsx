import React from "react";
import { Avatar, Card, Row, Col } from "antd";
import TimelineText from "../Timeline/Timeline";
import styled from "styled-components";
import OrderButton from "../OrderButton/OrderButton";

const { Meta } = Card;

const cardsData = [
  {
    id: 1,
    title: "Basic 28$",
    avatarSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    imageSrc:
      "https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg",
  },
  {
    id: 2,
    title: "Basic 28$",
    avatarSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    imageSrc:
      "https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg",
  },
  {
    id: 3,
    title: "Basic 28$",
    avatarSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    imageSrc:
      "https://support.trailingcrypto.com/wp-content/uploads/2021/08/Crypto-Signals-1-1024x576.jpg",
  },
];

const Cards = () => (
  <Wrapper>
    <Row gutter={[32, 32]}>
      {cardsData.map((card) => (
        <Col xs={24} sm={12} md={8} key={card.id}>
          <Card
            style={{
              maxWidth: 350,
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            cover={<img alt="example" src={card.imageSrc} />}
          >
            <Meta avatar={<Avatar src={card.avatarSrc} />} title={card.title} />
            <br />
            <TimelineText />
            <OrderButton />
          </Card>
        </Col>
      ))}
    </Row>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 100px;
  padding: 16px;
`;

export default Cards;
