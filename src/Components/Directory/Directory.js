import React from "react";
import "./Directory.scss";
import ShopMens from "./../../assets/shopMens.jpg";
import ShopWomens from "./../../assets/shopWomens.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="directory__wrap">
        <div
          className="directory__item"
          style={{
            backgroundImage: `url(${ShopWomens})`,
          }}
        >
          <a href="Womens">Shop Womens</a>
        </div>
        <div
          className="directory__item"
          style={{
            backgroundImage: `url(${ShopMens})`,
          }}
        >
          <a href="Mens">Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
