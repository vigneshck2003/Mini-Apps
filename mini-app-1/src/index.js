import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Stays from "./pages/Stays";
import StayDetails from "./pages/StayDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/stays",
    element: <Stays />,
  },
  {
    path: "stays/:stayId",
    element: <StayDetails />,
  },
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
