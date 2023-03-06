import React from "react";
import "./index.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import ImageSlider from "./Components/Imageslider";
import { Experience } from "./Components/Experience";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import SocialLinks from "./Components/Sociallinks";

function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <ImageSlider />
      <Experience />
      <Contact />
      <SocialLinks />

      <Footer />
    </React.StrictMode>
  );
}

export default App;
