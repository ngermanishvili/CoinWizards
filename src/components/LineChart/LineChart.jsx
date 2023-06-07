import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        borderColor: "#bd0000",
        borderWidth: 1,
        pointRadius: 1,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        reverse: true, // Add this line to reverse the x-axis
        grid: {
          display: false,
        },
        ticks: {
          color: "#999999",
          reverse: true, // Add this line to reverse the x-axis ticks
        },
      },
      y: {
        position: "right", // Add this line to position the y-axis on the right side
        grid: {
          color: "#eaeaea",
        },
        ticks: {
          color: "#8a7e7e",
          beginAtZero: true,
          callback: function (value) {
            return "$" + value.toFixed(2);
          },
        },
      },
    },
  };

  console.log("coinHistory:", coinHistory);
  console.log("coinprice:", coinPrice);
  console.log("cointimestamp:", coinTimestamp);

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
