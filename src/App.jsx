import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";
import AnimatedRoutes from "./components/Animate/AnimatedRoutes";
import Banner from "./components/Banner/Banner";
import { Banner01DataSource } from "./data/data.source";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  //
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      {isHomePage && <Banner dataSource={Banner01DataSource} />}
      <div className="main">
        <Layout>
          <div className={`routes ${isAboutPage ? "about" : ""}`}>
            <AnimatedRoutes />
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
