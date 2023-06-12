// import React, { useEffect, useRef } from "react";
// import { useGetCryptosQuery } from "./../../services/cryptoApi";
// import styled from "styled-components";

// const Bubbles = () => {
//   const canvasRef = useRef(null);
//   const { data: cryptosData } = useGetCryptosQuery(60); // Fetch 60 cryptocurrencies

//   console.log(cryptosData);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const particles = [];

//     const createParticles = () => {
//       const numParticles = Math.min(cryptosData?.data?.coins.length, 59);

//       for (let i = 0; i < numParticles; i++) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const size = 40; // Set a fixed size for each bubble
//         const speedX = Math.random() * 0.4 - 0.2;
//         const speedY = Math.random() * 0.4 - 0.2;
//         const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
//           Math.random() * 255
//         }, 1)`;

//         const coin = cryptosData?.data?.coins[i];
//         if (coin && coin.name) {
//           particles.push({ x, y, size, speedX, speedY, color });
//         }
//       }
//     };

//     const animateParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle, index) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();

//         ctx.fillStyle = "white";
//         ctx.font = "12px Arial";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";

//         const price = Number(cryptosData?.data?.coins[index]?.price) || 0;
//         ctx.fillText(
//           cryptosData?.data?.coins[index]?.name || "",
//           particle.x,
//           particle.y
//         );
//         ctx.fillText(`$${price.toFixed(2)}`, particle.x, particle.y + 20); // Round the price to two decimal places

//         if (
//           particle.x < -50 ||
//           particle.x > canvas.width + 20 ||
//           particle.y < -50 ||
//           particle.y > canvas.height + 20
//         ) {
//           particle.x = Math.random() * canvas.width;
//           particle.y = Math.random() * canvas.height;
//         }
//       });

//       requestAnimationFrame(animateParticles);
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     createParticles();
//     animateParticles();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [cryptosData]);

//   return (
//     <Wrapper>
//       <div className="wrapper-canvas">
//         <canvas
//           ref={canvasRef}
//           style={{ position: "fixed", width: "100%", height: "100vh" }}
//           className="bubbles-canvas"
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   width: 100%;
//   height: 85vh;
//   background-color: #000;

//   .wrapper-canvas {
//     position: fixed;
//     width: 100%;
//     height: 50vh;
//   }
// `;
// export default Bubbles;

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const AnimatedBubbles = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef(null);
  const radiusScale = d3.scaleLinear().range([30, 70]);

  const createBubbleChart = () => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 50, right: 20, bottom: 20, left: 20 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = window.innerHeight - margin.top - margin.bottom;

    radiusScale.domain([0, d3.max(data, (d) => d.size)]);

    const simulation = d3
      .forceSimulation(data)
      //   .force("x", d3.forceX(width / 3).strength(0.050))
      //   .force("y", d3.forceY(height / 2).strength(0.06))
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
      .range(["#f44336", "#4caf50"])

      .domain(data.map((d) => d.color));

    svg.select(".bubbles").remove();

    const bubblesGroup = svg.append("g").attr("class", "bubbles");

    const circles = bubblesGroup
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => radiusScale(d.size))
      .attr("fill", (d) => colorScale(d.color))
      .style("stroke", "blue") // Set the border color to blue
      .style("stroke-width", "1px") // Set the border width to 1 pixel
      .style("box-shadow", "0px 0px 10px black, 0px 0px 10px black inset") // Add shadows to both border and inside
      .style("cursor", "pointer")
      .style("fill-opacity", 0.75);

    const moveCircles = () => {
      circles
        .attr("cx", (d) => {
          d.x += (Math.random() - 0.05) * 0.08; // Adjust the movement speed here
          return d.x;
        })
        .attr("cy", (d) => {
          d.y += (Math.random() - 0.03) * 0.06; // Adjust the movement speed here
          return d.y;
        });
    };

    d3.interval(moveCircles, 5); // Adjust the interval duration here
  };

  useEffect(() => {
    const generateRandomBubbles = () => {
      const newBubbles = Array.from({ length: 60 }, () => ({
        color: getRandomColor(),
        size: getRandomSize(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setData(newBubbles);
    };

    const getRandomColor = () => {
      const colors = ["red", "green"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const getRandomSize = () => Math.floor(Math.random() * (50 - 10 + 1) + 10);

    generateRandomBubbles();
    window.addEventListener("resize", generateRandomBubbles);

    return () => {
      window.removeEventListener("resize", generateRandomBubbles);
    };
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      createBubbleChart();
    }
  }, [data]);

  return (
    <svg
      className="bubbles-svg"
      ref={svgRef}
      width={window.innerWidth}
      height={window.innerHeight}
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    ></svg>
  );
};

export default AnimatedBubbles;
