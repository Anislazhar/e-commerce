import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="App__main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
