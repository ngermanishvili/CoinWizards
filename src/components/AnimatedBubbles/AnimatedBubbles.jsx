// import React, { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { useGetCryptosQuery } from "../../services/cryptoApi";
// import Loading from "../Loading/Loading";

// const Bubbles = () => {
//   const [data, setData] = useState([]);
//   const [isDataLoaded, setIsDataLoaded] = useState(false);
//   const svgRef = useRef(null);
//   const radiusScale = d3.scaleLinear().range([30, 70]);

//   const { data: cryptosData, isLoading } = useGetCryptosQuery(100, {
//     skip: typeof window === "undefined",
//   });

//   const getRandomColor = () => {
//     const colors = ["red", "#90EE90"];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const getRandomSize = (price) => {
//     if (price > 8) {
//       return 70; // Large circle size for price change > 8
//     } else if (price > 6) {
//       const size = 60 + (price - 6) * 2; // Increase circle size gradually from 60 to 70
//       return Math.round(size);
//     } else if (price > 3) {
//       const size = 45 + (price - 3) * 5; // Increase circle size gradually from 45 to 60
//       return Math.round(size);
//     } else if (price > 1) {
//       const size = 35 + (price - 1) * 5; // Increase circle size gradually from 35 to 45
//       return Math.round(size);
//     } else if (price === 0) {
//       return 20; // Circle size for price change = 0
//     } else if (price >= -4) {
//       const size = 15 + (price + 4) * 2.5; // Increase circle size gradually from 15 to 20
//       return Math.round(size);
//     } else if (price >= -6) {
//       const size = 10 + (price + 6) * 1.25; // Increase circle size gradually from 10 to 15
//       return Math.round(size);
//     } else if (price > -5) {
//       return 60; // Circle size for price change > -5
//     } else if (price > -8) {
//       return 80; // Circle size for price change > -8
//     } else {
//       const size = 5 + (price + 6) * 1; // Increase circle size gradually from 5 to 10
//       return Math.round(size);
//     }
//   };

//   useEffect(() => {
//     if (cryptosData?.data?.coins) {
//       const screenWidth = window.innerWidth;
//       const newData = cryptosData.data.coins.slice(0, 100).map((coin) => ({
//         color: getRandomColor(),
//         size: getRandomSize(coin.change, screenWidth),
//         x: Math.random() * screenWidth,
//         y: Math.random() * window.innerHeight,
//         price: coin.change,
//         name: coin.symbol,
//         iconUrl: coin.iconUrl,
//       }));
//       setData(newData);
//       setIsDataLoaded(true);
//     }
//   }, [cryptosData, window.location.pathname]);

//   useEffect(() => {
//     const createBubbleChart = () => {
//       const svg = d3.select(svgRef.current);
//       const margin = { top: 70, right: 30, bottom: 30, left: 30 };
//       const { width, height } = svgRef.current.getBoundingClientRect();

//       svg.attr("viewBox", `0 0 ${width} ${height}`);

//       radiusScale.domain([0, d3.max(data, (d) => d.size)]);

//       const simulation = d3
//         .forceSimulation(data)
//         .force(
//           "collide",
//           d3
//             .forceCollide(2)
//             .radius((d) => radiusScale(d.size) + 2)
//             .strength(2)
//         )
//         .force("charge", d3.forceManyBody().strength(1));

//       const colorScale = d3
//         .scaleOrdinal()
//         .range((d) => (d.price < 0 ? ["red"] : ["#90EE90"]))
//         .domain(data.map((d) => d.color));

//       svg.select(".bubbles").remove();

//       const bubblesGroup = svg.append("g").attr("class", "bubbles");
//       const imagesGroup = svg.append("g").attr("class", "images"); // Append imagesGroup to the SVG container

//       // ...

//       //

//       const images = imagesGroup
//         .selectAll("image")
//         .data(data, (d) => d.name)
//         .enter()
//         .append("image")
//         .attr("xlink:href", (d) => d.iconUrl)
//         .attr("x", (d) => d.x - 30) // Adjust the x position of the icon
//         .attr("y", (d) => d.y - radiusScale(d.size) / 4 - 30)
//         .attr("width", 5) // Set the width of the icon to 20 pixels
//         .attr("height", 5) // Set the height of the icon to 20 pixels
//         .attr("preserveAspectRatio", "xMidYMid meet");

//       const circles = bubblesGroup
//         .selectAll("circle")
//         .data(data, (d) => d.name)
//         .enter()
//         .append("circle")
//         .attr("cx", (d) => d.x)
//         .attr("cy", (d) => d.y)
//         .attr("r", (d) => radiusScale(getRandomSize(d.price))) // Use getRandomSize to determine the circle size
//         .classed("bubble-circle", true) // Add a custom CSS class to the circles
//         .style("stroke", "white")
//         .style("stroke-width", "0.4px")
//         .style("cursor", "pointer")
//         .style("fill-opacity", 0.85)
//         .style(
//           "box-shadow",
//           "0px 0px 10px rgba(186, 67, 67, 0.5), 0px 0px 20px rgba(217, 52, 52, 0.3) inset"
//         )
//         .style("border-radius", "50%")
//         .style("transform-style", "preserve-3d")
//         .style("transform", "translateZ(0)")
//         .style("backface-visibility", "hidden");

//       const texts = bubblesGroup
//         .selectAll("text")
//         .data(data)
//         .enter()
//         .append("text")
//         .attr("x", (d) => d.x)
//         .attr("y", (d) => d.y + radiusScale(d.size) / 2 + 5) // Position the text below the circle
//         .text((d) => `${d.name}`)
//         .attr("text-anchor", "middle")
//         .attr("alignment-baseline", "middle")
//         .attr("fill", (d) => (d.price < 0 ? "red" : "#2bed2b"))
//         .style("pointer-events", "none")
//         .style("font-size", (d) => {
//           if (d.size < 20) {
//             return "14px"; // Set a smaller font size for small circles
//           } else {
//             return "24px"; // Use the default font size for larger circles
//           }
//         });

//       texts
//         .append("tspan")
//         .text((d) => "+" + d.price + "%") // Add the price text with a plus sign
//         .attr("text-anchor", "middle")
//         .attr("alignment-baseline", "middle")
//         .style("font-size", (d) => {
//           if (d.size < 10) {
//             return "10px"; // Set a smaller font size for small circles
//           } else {
//             return "16px"; // Use the default font size for larger circles
//           }
//         });

//       const moveCircles = () => {
//         circles
//           .attr("cx", (d) => {
//             d.x += (Math.random() - 0.5) * 0.5; // Adjust the random movement range
//             d.x = Math.max(
//               radiusScale(d.size),
//               Math.min(width - radiusScale(d.size), d.x)
//             ); // Keep x within the screen width boundaries
//             return d.x;
//           })
//           .attr("cy", (d) => {
//             d.y += (Math.random() - 0.5) * 0.5; // Adjust the random movement range
//             d.y = Math.max(
//               radiusScale(d.size),
//               Math.min(height - radiusScale(d.size), d.y)
//             ); // Keep y within the screen height boundaries
//             return d.y;
//           });

//         images
//           .attr("xlink:href", (d) => d.iconUrl)
//           .attr("x", (d) => d.x - radiusScale(d.size) / 4)
//           .attr("y", (d) => d.y - radiusScale(d.size) / 2 - 15)
//           .attr("width", (d) => {
//             if (d.size < 20) {
//               return width / 80; // Set a smaller width for small circles
//             } else {
//               return width / 60; // Use the default width for larger circles
//             }
//           })
//           .attr("height", (d) => {
//             if (d.size < 25) {
//               return width / 80; // Set a smaller height for small circles
//             } else {
//               return width / 60; // Use the default height for larger circles
//             }
//           })
//           .attr("preserveAspectRatio", "xMidYMid meet");

//         texts
//           .attr("x", (d) => d.x + 0)
//           .attr("y", (d) => d.y + radiusScale(d.size) / 18);
//         texts
//           .select("tspan")
//           .attr("x", (d) => d.x)
//           .attr("y", (d) => d.y + radiusScale(d.size) / 2);
//         // ...
//       };
//       d3.interval(moveCircles, 5);
//     };

//     if (data.length > 0) {
//       createBubbleChart();
//     }
//   }, [data]);

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (!cryptosData?.data?.coins) {
//     return null;
//   }
//   return (
//     <svg
//       className="bubbles-svg"
//       ref={svgRef}
//       style={{ width: "100%", height: "100%" }}
//     ></svg>
//   );
// };

// export default Bubbles;

