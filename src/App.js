import React from "react";
import "./App.css";
// components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import WhatsInside from "./components/WhatsInside";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhySection />
      <WhatsInside />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
