import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../../services/CryptoNewsApi";
import Loading from "../Loading/Loading";
import moment from "moment";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import styled from "styled-components";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://coinclarity.com/wp-content/uploads/2020/04/coinclarity-placeholder.png";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 3 : 12,
  });

  if (!cryptoNews?.value) return <Loading />;

  return (
    <Wrapper>


    <Row gutter={[32, 32]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option key="Cryptocurrency" value="Cryptocurrency">
              Cryptocurrency
            </Option>

            {data?.data?.coins?.map((currency) => (
              <Option key={currency.uuid} value={currency.name}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news) => (
        <Col xs={24} sm={12} lg={8} key={news.uuid}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </Wrapper>
  );
};


const Wrapper = styled.div`
margin-top: 50px;
`
export default News;
