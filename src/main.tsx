import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import Pricing from "./pages/pricing.tsx";
import "./index.css";

const router = createBrowserRouter([
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: "/pricing", // Pricing route
        element: <Pricing />,
      },
    ],
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
