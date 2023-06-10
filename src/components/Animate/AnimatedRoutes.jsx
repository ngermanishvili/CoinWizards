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
  About,
} from "../../components";
import { AnimatePresence } from "framer-motion";
import Authorization from "../Authorization/Authorization";

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
        <Route path="/about" element={<About />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
