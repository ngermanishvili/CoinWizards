import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import coinWizards from "../images/wizard2.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <Wrapper>
      <Link to="/">
        <img className="logo" src={coinWizards} alt="coinwizards" />
      </Link>
      <header className="header">
        <div className="header__content">
          <nav
            className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
          >
            <ul>
              <li>
                <Link to="/">მთავარი</Link>
              </li>
              <li>
                <Link to="/exchanges">გაცვლა</Link>
              </li>
              <li>
                <Link to="/news">სიახლეები</Link>
              </li>
              <li>
                <Link to="/cryptocurrencies">კრიპტოვალუტები</Link>
              </li>
              <li>
                <Link to="/about">ჩვენს შესახებ</Link>
              </li>
              <li>
                <Link to="/dictionary">ლექსიკონი</Link>
              </li>
              {/* <Link to="/Authorization">
                <button className="btn btn__login">რეგისტრაცია </button>
              </Link> */}
            </ul>
          </nav>
          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header {
    background: #000;
   width: 100%;
 z-index: 1;
 box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 0; */
  }
  .logo {
    display: inline-block;
position: absolute;
top: 10px;
left: 10px;
z-index: 100;
   width: 160px;
   line-height: 70px;
  }
  ,

  .header__content {
    overflow: hidden;
    color: #fff;
    margin: 0 auto;
    max-width: 1920px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;
  }
  .header__content__logo {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    
  }
  .header__content__nav {
    top: 0;
    right: 100%;
    bottom: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(rgb(32, 32, 32), 0.9);
    backdrop-filter: blur(6px);
    transform: translate(0);
    transition: 0.3s ease transform;
    color: #fff;
  }
  ,
  .header__content__nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }
  ,
  .header__content__nav ul li:not(:last-child) {
    margin-bottom: 32px;
  }

  ,
  .header__content__nav ul li a {
    font-size: 14px;
   color: rgba(255, 255, 255, 0.75);
    margin-left: 46px;
    padding: 0 8px;
    text-decoration: none;
  }

  .header__content__nav .btn {
    cursor: pointer;
    outline: none;
    padding: 0.45rem 1.30rem;
    border-radius: 12px;
    font-size: 1rem;
    font-family: inherit;
    background: transparent;
    color: rgb(32, 32, 32);
    border: 1px solid transparent;
    transition: 0.3s ease all;
    margin: 0.5em 0.5em;
  }
  ,
  .header__content__nav .btn:hover {
    border-color: rgb(162, 162, 246);
    background: rgba(rgb(162, 162, 246), 0.1);
    color: rgb(162, 162, 246);
  }

  .header__content__nav .btn:active {
    border-color: rgb(162, 162, 246);
    background: linear-gradient(
      rgba(rgb(162, 162, 246), 0.2),
      rgba(rgb(162, 162, 246), 0.3)
    );
    color: rgb(162, 162, 246);
  }

  .header__content__nav .btn__login {
    background-color: rgb(32, 32, 32);
    color: #fff;
  }

  .header__content__nav.isMenu {
    transform: translate(100%);
  }

  .header__content__toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 2rem;
    transition: 0.3s ease all;
    position: relative;
    margin-left: 20rem;
  }

  .header__content__toggle:hover {
    color: rgb(162, 162, 246);
  }

  @media (min-width: 48em) {
    /* Styles applied for a minimum width of 48em (768px) and above */
    .header {
      padding: 0 3rem;
    }

    .header__content__nav {
      transform: none;
      flex-direction: row;
      background: transparent;
      width: auto;
      height: 100%;
      position: static;
    }

    .header__content__nav ul {
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
      margin-right: calc(0.5rem + 16px);
    }

    .header__content__nav ul li:not(:last-child) {
      margin-bottom: 0;
      margin-right: 16px;
    }

    .header__content__toggle {
      display: none;
      position: absolute;
      
    }
  .navbar{
   display: flex;
  }
  }
`;

export default Navbar;
