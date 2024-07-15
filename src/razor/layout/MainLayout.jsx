import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import React from "react";
import Foter from "../Foter";
import Lettalk from "../Lettalk";

const MainLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Lettalk />
      <Foter />
    </>
  );
};

export default MainLayout;
