import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import FoodQuality from "./Components/FoodQuality";
import EnjoyFood from "./Components/EnjoyFood";
import EnjoyMeal from "./Components/EnjoyMeal";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FoodQuality />
      <EnjoyFood />
      <Menu />
      <EnjoyMeal />
      <Footer />
    </div>
    
  );
}

export default App;