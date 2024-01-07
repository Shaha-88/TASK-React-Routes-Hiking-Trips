import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";

const router = createBrowserRouter([
  ,
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/tripslist", element: <TripsList /> },

  { path: "/tripdetail/:tripId", element: <TripDetail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
