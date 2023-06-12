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

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AnimatedBubbles = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef(null);

  const createBubbleChart = () => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = svg.attr('width') - margin.left - margin.right;
    const height = svg.attr('height') - margin.top - margin.bottom;
    const radiusScale = d3.scaleLinear()
      .range([2, 10])
      .domain([0, d3.max(data, d => d.size)]);
    const colorScale = d3.scaleOrdinal()
      .range(['red', 'green', 'blue'])
      .domain(data.map(d => d.color));

    svg.append('g')
      .attr('class', 'bubbles')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => radiusScale(d.size))
      .attr('fill', d => colorScale(d.color));
  };

  useEffect(() => {
    setData([
      { color: 'red', size: 20, x: 100, y: 100 },
      { color: 'green', size: 20, x: 200, y: 200 },
      { color: 'blue', size: 20, x: 300, y: 300 }
    ]);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      createBubbleChart();
    }
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} width="500" height="500" viewBox="0 0 500 500"></svg>
    </div>
  );
};

export default AnimatedBubbles;


