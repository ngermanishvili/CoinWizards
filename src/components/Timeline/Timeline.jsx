import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const TimelineText = () => (
  <Timeline
    items={[
      {
        color: "green",
        children: "1-3 signals per day",
      },
      {
        color: "green",
        children: "detail analysis of the coin",
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
