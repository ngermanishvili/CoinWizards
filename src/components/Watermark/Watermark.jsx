import React, { useMemo, useState } from "react";
import { Typography, Watermark } from "antd";
import Drawer from "../Drawer/Drawer";
import styled from "styled-components";

const { Paragraph } = Typography;
const WatermarkComponent = ({ config }) => {
  const watermarkProps = useMemo(() => {
    const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

    return {
      content,
      font: {
        color: typeof color === "string" ? color : color.toRgbString(),
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    };
  }, [config]);

  return (
    <Watermark {...watermarkProps}>
      <Typography>
        <Paragraph>
          The light-speed iteration of the digital world makes products more
          complex. However, human consciousness and attention resources are
          limited. Facing this design contradiction, the pursuit of natural
          interaction will be the consistent direction of Ant Design.
        </Paragraph>

        <Paragraph>
          Natural user behavior: In the interaction with the system, the
          designer should fully understand the relationship between users,
          system roles, and task objectives, and also contextually organize
          system functions and services. At the same time, a series of methods
          such as behavior analysis, artificial intelligence and sensors could
          be applied to assist users to make effective decisions and reduce
          extra operations of users, to save users' mental and physical
          resources and make human-computer interaction more natural.
        </Paragraph>
      </Typography>
      <img
        style={{
          zIndex: 10,
          width: "100%",
          maxWidth: 800,
          position: "relative",
          left: config.left,
        }}
        src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
        alt="Sample Image"
      />
    </Watermark>
  );
};

const WaterMarkContent = () => {
  const [config, setConfig] = useState({
    content: "Crypto Wizzards",
    color: "rgba(0, 0, 0, 0.15)",
    fontSize: 14,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
    left: "50%", // Image position for the first instance
  });

  const [config2, setConfig2] = useState({
    content: "პირველი კრიპტო სიგნალების საიტი საქართველოში",
    color: "rgba(0, 0, 0, 0.15)",
    fontSize: 14,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
    left: "0%", // Image position for the second instance
    padding: 20,
  });

  return (
    <Wrapper>
      <WatermarkComponent config={config} />
      <div className="space"></div>
      <Drawer />
      <div className="space"></div>
      <WatermarkComponent config={config2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;

  .space {
    width: 100%;
    height: 100px;
  }
`;

export default WaterMarkContent;
