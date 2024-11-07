import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <HelmetProvider >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </HelmetProvider>
  </StrictMode>
);
