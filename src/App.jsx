// eslint-disable-next-line no-unused-vars
import React from "react";
// import Headers from "../components/Headers";
import Headers from "./Components/Headers";
import Foter from "./Components/Foter";
import HomePage from "./pages/Home/HomePage";
// import Home from "./Home";

function App() {
  return (
    <div className="bg-[#020D23]">
      <Headers />
      {/* <Home /> */}
      <HomePage />
      <Foter />
    </div>
  );
}

export default App;
