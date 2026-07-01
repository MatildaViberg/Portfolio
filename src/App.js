import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import ImageSlider from "./Components/Imageslider";
import { Experience } from "./Components/Experience";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import SocialLinks from "./Components/Sociallinks";
import Vitalit from "./Components/Vitalit";
import AI4UX from "./Components/AI4UX";
import Matematikgeneratorn from "./Components/Matematikgeneratorn";
import Nana from "./Components/NANA";
import Thesis from "./Components/Thesis";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main portfolio page */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* thesis project page */}
        <Route path="/Thesis" element={<Thesis />} />

        {/* AI4UX project page */}
        <Route path="/AI4UX" element={<AI4UX />} />

        {/* Matematikgeneratorn project page */}
        <Route path="/Matematikgeneratorn" element={<Matematikgeneratorn />} />

        {/* Vitalit project page */}
        <Route path="/Vitalit" element={<Vitalit />} />

        {/* Nana project page */}
        <Route path="/Nana" element={<Nana />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
