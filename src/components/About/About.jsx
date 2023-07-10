import Bubbles from "../AnimatedBubbles/AnimatedBubbles"; // Import the Bubbles component
import styled from "styled-components";
import React from 'react'

export const About = () => {
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
    margin-top: 50px;
    width: 100%;
    height: 800px;
    position: relative;
    background: #1a1a1a;
  }
//
  @media screen and (max-width: 800px) {
    .bubblediv {
      width: 100%;
      height: 100vh;
      bottom: 0;
      position: absolute;
    }
  }
`;

export default Bubbles; // Export the Bubbles component with a default export
