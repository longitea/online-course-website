import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import { PATH } from "../config/path";
import { Contact, ContactComponent } from "../pages/input-form";

export const ContactLayout = () => {
  return {
    path: PATH.contact.index,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
      {
        path: PATH.contact.controlForm,
        element: <ContactComponent />,
      },
    ],
  };
};
