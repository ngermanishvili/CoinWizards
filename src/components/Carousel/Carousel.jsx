import React, { useState, useEffect } from "react";
import { Carousel, Radio } from "antd";
import Cards from "../Cards/Cards";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  cursor: "pointer",
};

const Owl = () => {
  const [dotPosition, setDotPosition] = useState("top");
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const prompts = [
    "What are the current technical indicators suggesting for Bitcoin's price movement in the next 24 hours?",
    "Which altcoin is showing strong bullish signals based on its recent price action and trading volume?",
    "Can you analyze the on-chain data for Ethereum and identify any significant accumulation or distribution patterns?",
    "Which cryptocurrency has the highest relative strength index (RSI) value, indicating potential overbought conditions?",
  ];

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [prompts.length, currentPromptIndex]);

  const handleSwipe = (index) => {
    setCurrentPromptIndex(index);
  };

  return (
    <>
 

      <div className="carus">
        <Radio.Group
          onChange={handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        ></Radio.Group>
        <Carousel
          dotPosition={dotPosition}
          autoplay
          draggable
          beforeChange={handleSwipe}
        >
          {prompts.map((prompt, index) => (
            <div key={index}>
              <h3 style={contentStyle}>{prompt}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Owl;
