import React from "react";
import "./header.scss";
import Logo from "../../assets/logo-red.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="MrSnake" />
        </div>
      </div>
    </header>
  );
};

export default Header;
