import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <header className="header">
        <div className="header__content">
          <Link to="/" className="header__content__logo">
            CryptoWizzards
          </Link>
          <nav
            className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exchanges">Exchanges</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </li>

              <Link to="/Login">
                <button className="btn">Login</button>
              </Link>
              <Link to="/Authorization">
                <button className="btn btn__login">Register</button>
              </Link>
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
    background: rgb(0, 21, 41);
    width: 100%;
    height: 100px;
    padding: 0 1.5rem;
    transition: 0.3s ease all;
    position: fixed;
    z-index: 100;
    text-transform: uppercase;
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
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  .header__content__nav {
    top: 0;
    right: 100%;
    bottom: 0;
    width: 100%;
    height: 100 vh;
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
    color: #fff
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
    text-decoration: none;
    color: inherit;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    transition: 0.3s ease all;
  }

  ,
  .header__content__nav .btn {
    cursor: pointer;
    outline: none;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    font-size: 1rem;
    font-family: inherit;
    background: rgb(162, 162, 246);
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
    }
  }

`;

export default Navbar;
