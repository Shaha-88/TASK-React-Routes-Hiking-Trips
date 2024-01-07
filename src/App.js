import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Home />
      <TripList />
      <TripDetail />
    </div>
  );
}

export default App;
