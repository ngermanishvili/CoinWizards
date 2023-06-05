import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Homepage,
  Exchanges,
  Cryptocurrencies,
  Cryptodetails,
  News,
} from "../../components";

const AnimatedRoutes = () => {
  const [activeRoute, setActiveRoute] = useState("");

  const handleRouteChange = (location) => {
    setActiveRoute(location.pathname);
  };

  useLocation(handleRouteChange);

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/exchanges" element={<Exchanges />} />
      <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route exact path="/crypto/:coinId" element={<Cryptodetails />} />
      <Route exact path="/news" element={<News />} />
    </Routes>
  );
};

export default AnimatedRoutes;
