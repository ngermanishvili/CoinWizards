import React from "react";
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
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<Cryptodetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
