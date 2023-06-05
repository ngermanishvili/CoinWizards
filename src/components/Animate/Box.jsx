import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import Bitcoin from "../images/btc.png";
import Solana from "../images/sol.png";
import Matic from "../images/matic.png";
import Xrp from "../images/xrp.png";

export default function App() {
  const ref = useRef(null);
  const Coins = () => {
    return (
      <div>
        <img src={Bitcoin} className="btc" alt="Bitcoin" />
        <img src={Solana} className="sol" alt="Solana" />
        <img src={Matic} className="xrp" alt="Xrp" />
        <img src={Xrp} className="matic" alt="Matic" />
      </div>
    );
  };

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -20;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
        <Coins /> <br /> <Coins /> <br /> <Coins />
      </div>
    </div>
  );
}
