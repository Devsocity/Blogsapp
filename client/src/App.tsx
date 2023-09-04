import { useState } from "react";
import Home from "./components/pages/Home.jsx";
import Profile from "./components/pages/Profile.jsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
