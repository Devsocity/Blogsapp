import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import NewestAuthor from "./components/NewestAuthor.jsx";
import Blogbanner from "./components/Blogbanner.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Hero />
      <NewestAuthor />
      <Blogbanner />
      <Footer />
    </div>
  );
}

export default App;
