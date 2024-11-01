import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import Pricing from "./pages/pricing.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }, 
   {
    path: "/pricing",
    element: <Pricing/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>
);
