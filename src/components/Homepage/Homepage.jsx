import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
const { Title } = Typography;
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import News from "../News/News";
import Box from "../Animate/Box";
import Loading from "../Loading/Loading";
import Stats from "../Stats/Stats";
import { Stats2, Stats3 } from "../Stats/Stats";
import Owl from "../Carousel/Carousel";
import ProgressBar from "../ProgressBar/ProgressBar";
import styled from "styled-components";
import Cards from "../Cards/Cards";

// import Banner from "../Banner/Banner";
// import { Banner01DataSource } from "../../data/data.source";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if (isFetching) return <Loading />;

  return (
    <>
      {/* <Wrapper>
        <Title level={2} className="heading">
          GLOBAL CRYPTO STATS
        </Title>
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
        </Row> */}

      {/* // *? Cryptocurrencies section */}

      <Cards />

      <Owl />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>

        <Title level={2} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Wrapper>
        <Title level={2} className="heading">
          GLOBAL CRYPTO STATS
        </Title>
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

        <Cryptocurrencies simplified={true} />

        {/* <ProgressBar /> */}
        <div className="home-heading-container">
          {/* //*? News section News Section} */}
          {/* <Title level={2} className="home-title">
          Latest Crypto News
        </Title>

        <Title level={2} className="show-more">
          <Link to="/news">Show More .. </Link>
        </Title> */}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
export default Homepage;
