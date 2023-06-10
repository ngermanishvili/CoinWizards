import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import { Navbar, Footer } from "./components";
import "./App.css";
import AnimatedRoutes from "./components/Animate/AnimatedRoutes";
import Banner from "./components/Banner/Banner";
import { Banner01DataSource } from "./data/data.source";
import { Footer10DataSource } from "./data/data.source";

const App = () => {
  const location = useLocation(); // Get the current location
  // Check if the current location is the homepage ("/")
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      {isHomePage && <Banner dataSource={Banner01DataSource} />}

      <div className="main">
        {/* <Navbary dataSource={Nav00DataSource} /> */}
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
