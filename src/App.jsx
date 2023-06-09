import React from "react";
import { Layout } from "antd";
import { Navbar, Footer } from "./components";
import "./App.css";
import AnimatedRoutes from "./components/Animate/AnimatedRoutes";
import Banner from "./components/Banner/Banner"; // Import Banner0 component
import { Banner01DataSource } from "./data/data.source";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
        <Banner dataSource={Banner01DataSource} />
      </div>
      <div className="main">
        {/* <Header /> */}
        <Layout>
          <div className="routes">
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
