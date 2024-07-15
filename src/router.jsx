import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "./components/layout/MainLayout";
// import MainLayout from "./components/layout/MainLayout";
import React from "react";
import HomePage from "./pages/Home/HomePage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ResourcesPage from "./pages/Resources/ResourcesPage";
import DevopsPage from "./pages/Services/Devops/DevopsPage";
import NOCPage from "./pages/Services/NOC/NOCPage";
import { paths } from "./const/path";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <MainLayout />,
    children: [
      { path: paths.home, element: <HomePage /> },
      {
        path: paths.services,
        children: [
          { path: paths.devops, element: <DevopsPage /> },
          { path: paths.noc, element: <NOCPage /> },
        ],
      },
      { path: paths.aboutus, element: <AboutUsPage /> },
      { path: paths.resources, element: <ResourcesPage /> },
    ],
  },
]);

export default router;
