import "./Header.css";
import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="header-content">
        <img src={img} alt="logo bayside" />
        <div className="header-text">
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
