import React, { useState } from "react";
import { Pagination } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const DictionaryPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (page) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/");
    const currentPage = pathSegments[pathSegments.length - 1];

    let newPath = currentPath;

    // Remove previous id if it exists
    if (currentPage && !isNaN(parseInt(currentPage))) {
      newPath = currentPath.replace(`/${currentPage}`, "");
    }

    // Add new page to the URL
    newPath = newPath.endsWith("/")
      ? `${newPath}${page}`
      : `${newPath}/${page}`;

    if (page !== parseInt(currentPage, 10)) {
      setIsLoading(true);
      navigate(newPath);
      setTimeout(() => {
        window.location.reload();
        window.scrollTo(0, 0); // Scroll to top after reload
      }, 200);
    }
  };

  const getCurrentPage = () => {
    const pathSegments = location.pathname.split("/");
    const currentPage = parseInt(pathSegments[pathSegments.length - 1], 10);
    return isNaN(currentPage) ? 2 : currentPage;
  };

  return (
    <>
      <Pagination
        current={getCurrentPage()}
        defaultCurrent={2}
        total={50}
        onChange={handlePageChange}
      />
      {isLoading && <Loading />}
    </>
  );
};

export default DictionaryPagination;
