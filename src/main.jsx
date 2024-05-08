import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routers/index.jsx";
import { AuthProvider } from "./contexts/authContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  // <RouterProvider router={router} />
);
