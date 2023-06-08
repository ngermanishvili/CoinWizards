import React from "react";
import { Layout } from "antd";
import { Navbar, Footer } from "./components";
import "./App.css";
import AnimatedRoutes from "./components/Animate/AnimatedRoutes";
import Header from "./components/Navbar/Header";
import Stats from "./components/Stats/Stats";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
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
