import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import React from "react";
import Foter from "../Foter";

const MainLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Foter />
    </>
  );
};

export default MainLayout;
