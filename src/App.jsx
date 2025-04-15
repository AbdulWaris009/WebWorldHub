import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Servicing from "./pages/Servicing";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import OurTeam from "./components/OurTeam";
import Loader from "./components/Loader"; // Import Loader component

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <BrowserRouter>
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      
      {loadingComplete && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Servicing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
