// import React from "react";
// import { Card, Typography, Row, Col } from "antd";
// import styled from "styled-components";
// import cryptoLogo from "../images/crypto_banner.png";
// import cryptoLogo2 from "../images/futiristic3.jpeg";
// import WaterMarkContent from "../Watermark/Watermark";
// import Carousel from "../Carousel/Carousel";

// const { Title } = Typography;

// const Exchanges = () => {
//   return (
//     <Wrapper>
//       <Carousel />
//       <Card className="exchanges-flex">
//         {/* <Title level={2}>Crypto Wizzards</Title> */}
//         <div className="image-wrapper">
//           <img className="image" src={cryptoLogo} alt="Image" />
//           <div className="exchanges-title">
//             <Title level={4}>ჩვენს შესახებ</Title>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit amet
//               modi harum praesentium illum? Porro doloribus excepturi itaque?
//               Vel consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis. Lorem
//               ipsum dolor sit, amet consectetur adipisicing elit. Sit amet modi
//               harum praesentium illum? Porro doloribus excepturi itaque? Vel
//               consectetur ducimus hic voluptatibus accusamus rem quia,
//               cupiditate amet doloribus dicta dolore sit sapiente, eius adipisci
//               explicabo eveniet. Quis quibusdam repellendus culpa natus esse
//               pariatur ut, perferendis, aperiam dolor rem blanditiis.
//             </p>
//           </div>
//         </div>
//       </Card>

//       <Row>
//         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//         <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//         <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           <img src={cryptoLogo2} alt="ad" className="cryptologo" />
//         </Col>
//       </Row>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   padding: 20px;

//   .exchanges-flex {
//     display: flex;
//     align-items: center;
//     position: relative;
//   }

//   .image-wrapper {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//   }

//   .image {
//     width: 400px;
//     height: 400px;
//   }

//   .exchanges-title {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     margin-left: 20px;
//   }
//   .cryptologo {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 400px;
//     height: 200px;
//     padding: 20px;
//   }

//   @media (max-width: 1024px) {
//     .image-wrapper {
//       flex-direction: column;
//       align-items: center;
//     }

//     .image {
//       width: 100%;
//       height: auto;
//     }

//     .exchanges-title {
//       margin-top: 20px;
//       margin-top: 10px;
//       margin-left: 5px;
//       margin-bottom: 1px;
//     }
//   }
// `;

// export default Exchanges;

import React from "react";
import WaterMarkContent from "../Watermark/Watermark";
import styled from "styled-components";

const Exchanges = () => {
  return (
    <div>
      <Wrapper>
        <WaterMarkContent />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 30px;
`;

export default Exchanges;
