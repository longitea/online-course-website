import React from "react";
import Home from "../pages/home";
import { Outlet, createBrowserRouter, useRoutes } from "react-router-dom";
import { PATH } from "../config/path";
import { Contact, ContactComponent, ControlForm } from "../pages/input-form";
import { ContactLayout } from "./contact";

const router = createBrowserRouter([
  {
    path: PATH.home,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.register,
        element: <ControlForm />,
      },
      ContactLayout(),
    ],
  },
]);

export default router;
