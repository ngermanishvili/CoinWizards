import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loading from "../Loading/Loading";


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const cryptos = cryptoList?.data?.coins || [];

  const [searchTerm, setSearchTerm] = useState("");

  if (isFetching) return <Loading />;

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
//
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {/* <Owl /> */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {filteredCryptos.map((currency) => {
          return (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={`${currency.name}-${currency.uuid}`}
            >
              <Link to={`/crypto/${currency.uuid}`}>
           

                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={currency.name}
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}/</p>
                  <p>Market Cap: {millify(currency.marketCap)}/</p>
                  <p>Daily Change: {millify(currency.change)}%/</p>
                </Card>
                
              </Link>
            </Col>
          );
        })}
        
      </Row>
    </>
  );
};

export default Cryptocurrencies;
