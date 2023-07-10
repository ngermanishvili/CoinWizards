import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";
const { Title } = Typography;
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";

import Box from "../Animate/Box";
import Loading from "../Loading/Loading";

import { Stats2, Stats3 } from "../Stats/Stats";

import styled from "styled-components";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if (isFetching) return <Loading />;

  return (
    <>
      {/* // *? Cryptocurrencies section */}
      {/* <Banner dataSource={Banner01DataSource}  /> */}

      <Wrapper>
        {/* <Title level={2} className="home-title2">
          გაიარე კონსულტაცია და შეიძინე კრიპტო სიგნალები ყველაზე დაბალ ფასად !
        </Title> */}

        <div className="home-heading-container">
          <Title level={2} className="home-title">
            გლობალური (LIVE) სტატისტიკა
          </Title>
        </div>

        <Row>
          <Col span={14}>
            <Stats3 />
            <div className="flex-row">
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats.total}
              />
              <Statistic
                title="Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />

              <Statistic
                title="Total Market Cap"
                value={millify(globalStats.totalMarketCap)}
              />
            </div>
            <div className="flex-row2">
              <Statistic
                title="Total 24h Volume"
                value={millify(globalStats.total24hVolume)}
              />

              <Statistic
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </div>
          </Col>
          <Box />
        </Row>
        {/* <GifCard /> */}

        <Cryptocurrencies simplified={true} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .home-heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }

  .home-title {
    margin: 0 auto;
    margin-bottom: 80px;
  }
  .home-title2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    letter-spacing: 1px;
    margin-top: 40px;
  }
  .white-statistic {
    color: white;
  }

  .flex-row2 {
    display: flex;
    justify-content: space-around;
  }
`;
export default Homepage;
