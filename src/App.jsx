import React from "react";
import Headers from "./components/Headers";
import Foter from "./components/Foter";
import HomePage from "./pages/Home/HomePage";
// import Home from "./Home";

function App() {
  return (
    <div>
      <Headers />
      {/* <Home /> */}
      <HomePage />
      <Foter />
    </div>
  );
}

export default App;
