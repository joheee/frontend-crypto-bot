import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Terms from "./components/Terms.tsx";
// import BsDev from "./pages/BsDev.tsx";

// seluruh routing ditaruh pada router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms-conditions",
    element: <Terms />,
  },
]);

// gunakan RouterProvider lalu masukkan value dari router
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
