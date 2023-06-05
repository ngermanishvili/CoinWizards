import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
const { Title } = Typography;
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import News from "../News/News";
import Box from "../Animate/Box";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if (isFetching) return <Loading />;

  return (
    <>
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        exit={{ opacity: "0" }}
      >
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row>
          <Col span={12}>
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
            <Statistic
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
            />
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
          <Box />
        </Row>
        {/* // *? Cryptocurrencies section */}
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the World
          </Title>
          <Title level={2} className="show-more">
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </div>
        <Cryptocurrencies simplified={true} />
        <div className="home-heading-container">
          {/* //*? News section News Section} */}
          <Title level={2} className="home-title">
            Latest Crypto News
          </Title>
          <Title level={2} className="show-more">
            <Link to="/news">Show More</Link>
          </Title>
        </div>
        <News simplified />
      </motion.div>
    </>
  );
};

export default Homepage;
