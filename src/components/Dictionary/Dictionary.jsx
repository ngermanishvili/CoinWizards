import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import styled from "styled-components";
import DictionaryPagination from "../Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import dictionaryData from '../Dictionary/data';

const Dictionary = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(id ? parseInt(id, 10) : 1);
  const [data, setData] = useState([]);

  const pageSize = 15;

  useEffect(() => {
    const fetchData = () => {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = dictionaryData.slice(startIndex, endIndex);

      setData([...paginatedData]);
    };

    fetchData();
  }, [currentPage]);

  const navigate = useNavigate();

  const handlePaginationChange = (page) => {
    navigate(`/dictionary/${page}`);
    setCurrentPage(page);
  };
  

  return (
    <Wrapper>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.term}</a>}
              description={item.definition}
            />
          </List.Item>
        )}
      />
      <PaginX>
        <DictionaryPagination
          current={currentPage}
          pageSize={pageSize}
          total={dictionaryData.length}
          onChange={handlePaginationChange}
        />
      </PaginX>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 50px auto;
`;

const PaginX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Dictionary;
