import React from "react";
import "./default.scss";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/HomePage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
