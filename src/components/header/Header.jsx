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
      <h1>BAYSIDE TEAM</h1>
      <h3>Subite a la flota</h3>
    </div>
  );
};

export default Header;
