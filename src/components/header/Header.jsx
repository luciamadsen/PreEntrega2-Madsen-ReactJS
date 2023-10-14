import img from "./logo.png";
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={img} alt="logo bayside" width={80} />
      </Link>
      <h1>Bayside team</h1>
      <h2>Quienes somos jasjajsjajsjasj</h2>
    </div>
  );
};

export default Header;
