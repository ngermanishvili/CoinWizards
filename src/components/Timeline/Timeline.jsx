import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const TimelineText = () => (
  <Timeline
    items={[
      {
        color: "green",
        children: "Buy Bitcoin at $30,000 - June 1, 2023",
      },
      {
        color: "green",
        children: "Buy Ethereum at $2,000 - June 3, 2023",
      },
      {
        color: "red",
        children: (
          <>
            <p>Sell Ripple at $1.50 - June 5, 2023</p>
            <p>Sell Litecoin at $200 - June 6, 2023</p>
            <p>Sell Cardano at $1.20 - June 7, 2023</p>
          </>
        ),
      },
    ]}
  />
);




export default TimelineText;
