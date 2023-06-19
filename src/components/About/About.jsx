import React from "react";
import Bubbles from "../AnimatedBubbles/AnimatedBubbles"; // Import the Bubbles component
import styled from "styled-components";
import { Card, Col, Row, Statistic } from "antd";

const About = () => {
  // About page content
  return (
    <>
      <Wrapper>
        <div className="bubblediv">
          <Bubbles />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .bubblediv {
    margin-top: 31px;
    width: 100%;
    height: 800px;
    position: relative;
    background: #261e35;
  }

  @media screen and (max-width: 800px) {
    .bubblediv {
      width: 100%;
      height: 100vh;
      bottom: 0;
      position: absolute;
    }
  }
`;

export default About;
