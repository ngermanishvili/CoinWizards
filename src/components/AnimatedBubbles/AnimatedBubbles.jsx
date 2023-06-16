import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loading from "../Loading/Loading";
import redImage from "../images/12.png";
import greenImage from "../images/13.png";

const Bubbles = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const svgRef = useRef(null);
  const radiusScale = d3.scaleLinear().range([30, 70]);

  const { data: cryptosData, isLoading } = useGetCryptosQuery(60, {
    skip: typeof window === "undefined",
  });

  const getRandomColor = () => {
    const colors = ["red", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomSize = (price) => {
    if (price > 6) {
      return 40; // Large circle size for price change > 10%
    } else if (price > 3) {
      return 40; // Medium circle size for price change between 1% and 10%
    } else if (price < -2) {
      return 5;
    } else {
      return 25; // Small circle size for price change < 1%
    }
  };
  useEffect(() => {
    if (cryptosData?.data?.coins) {
      const newData = cryptosData.data.coins.slice(0, 60).map((coin) => ({
        color: getRandomColor(),
        size: getRandomSize(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        price: coin.change,
        name: coin.symbol,
        iconUrl: coin.iconUrl, // Add the iconUrl property to the data
      }));
      setData(newData);
      setIsDataLoaded(true);
    }
  }, [cryptosData, window.location.pathname]);

  useEffect(() => {
    const createBubbleChart = () => {
      const svg = d3.select(svgRef.current);
      const margin = { top: 70, right: 30, bottom: 30, left: 30 };
      const width = window.innerWidth - margin.left - margin.right;
      const height = window.innerHeight - margin.top - margin.bottom;

      svg.attr("viewBox", `0 0 ${width} ${height}`);

      radiusScale.domain([0, d3.max(data, (d) => d.size)]);

      const simulation = d3
        .forceSimulation(data)
        .force(
          "collide",
          d3
            .forceCollide(2)
            .radius((d) => radiusScale(d.size) + 2)
            .strength(2)
        )
        .force("charge", d3.forceManyBody().strength(1));

      const colorScale = d3
        .scaleOrdinal()
        .range((d) => (d.price < 0 ? ["red"] : ["green"]))
        .domain(data.map((d) => d.color));

      svg.select(".bubbles").remove();

      const bubblesGroup = svg.append("g").attr("class", "bubbles");
      const imagesGroup = svg.append("g").attr("class", "images"); // Append imagesGroup to the SVG container

      // ...

      //

      const images = imagesGroup
        .selectAll("image")
        .data(data, (d) => d.name)
        .enter()
        .append("image")
        .attr("xlink:href", (d) => d.iconUrl)
        .attr("x", (d) => d.x - 30) // Adjust the x position of the icon
        .attr("y", (d) => d.y - radiusScale(d.size) / 4 - 30)
        .attr("width", 5) // Set the width of the icon to 20 pixels
        .attr("height", 5) // Set the height of the icon to 20 pixels
        .attr("preserveAspectRatio", "xMidYMid meet");

      const circles = bubblesGroup
        .selectAll("circle")
        .data(data, (d) => d.name)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => radiusScale(getRandomSize(d.price))) // Use getRandomSize to determine the circle size
        .classed("bubble-circle", true) // Add a custom CSS class to the circles
        .style("stroke", "white")
        .style("stroke-width", "0.4px")
        .style("cursor", "pointer")
        .style("fill-opacity", 0.85)
        .style(
          "box-shadow",
          "0px 0px 10px rgba(186, 67, 67, 0.5), 0px 0px 20px rgba(217, 52, 52, 0.3) inset"
        )
        .style("border-radius", "50%")
        .style("transform-style", "preserve-3d")
        .style("transform", "translateZ(0)")
        .style("backface-visibility", "hidden");

      const texts = bubblesGroup
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y + radiusScale(d.size) / 2 + 5) // Position the text below the circle
        .text((d) => `${d.name}`)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", (d) => (d.price < 0 ? "red" : "green"))
        .style("pointer-events", "none")
        .style("font-size", "28px");

      texts
        .append("tspan")
        .text((d) => d.price + "%") // Add the price text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "16px");

      const moveCircles = () => {
        circles
          .attr("cx", (d) => {
            d.x += (Math.random() - 0.5) * 0.5; // Adjust the random movement range
            d.x = Math.max(
              radiusScale(d.size),
              Math.min(width - radiusScale(d.size), d.x)
            ); // Keep x within the screen width boundaries
            return d.x;
          })
          .attr("cy", (d) => {
            d.y += (Math.random() - 0.5) * 0.5; // Adjust the random movement range
            d.y = Math.max(
              radiusScale(d.size),
              Math.min(height - radiusScale(d.size), d.y)
            ); // Keep y within the screen height boundaries
            return d.y;
          });

        images
          .attr("xlink:href", (d) => d.iconUrl)
          .attr("x", (d) => d.x - radiusScale(d.size) / 4)
          .attr("y", (d) => d.y - radiusScale(d.size) / 2 - 15)
          .attr("width", (d) => width / 60)
          .attr("height", (d) => width / 60)
          .attr("preserveAspectRatio", "xMidYMid meet");
        texts
          .attr("x", (d) => d.x + 0)
          .attr("y", (d) => d.y + radiusScale(d.size) / 18);
        texts
          .select("tspan")
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y + radiusScale(d.size) / 2);
        // ...
      };
      d3.interval(moveCircles, 5);
    };

    if (data.length > 0) {
      createBubbleChart();
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!cryptosData?.data?.coins) {
    return null;
  }
  return (
    <svg
      className="bubbles-svg"
      ref={svgRef}
      style={{ width: "100%", height: "100%" }}
    ></svg>
  );
};

export default Bubbles;
