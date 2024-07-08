import React from "react";
// import Headers from "../components/Headers";
import Headers from "../src/components/Headers";
import Foter from "../src/components/Foter";
import HomePage from "./pages/Home/HomePage";
import ResourcesPage from "./pages/Resources/ResourcesPage";
// import Home from "./Home";

function App() {
  return (
    <div className="bg-[#020D23]">
      <Headers />

      {/* <HomePage /> */}
      <ResourcesPage />
      <Foter />
    </div>
  );
}

export default App;
