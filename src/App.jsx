import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import SectionA from "./pages/SectionA";
import SectionB from "./pages/SectionB";
import SectionC from "./pages/SectionC";
import Video from "./pages/Video";
import Mindmap from "./pages/Mindmap";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/section-a" element={<SectionA />} />
        <Route path="/section-b" element={<SectionB />} />
        <Route path="/section-c" element={<SectionC />} />
        <Route path="/video" element={<Video />} />
        <Route path="/mindmap" element={<Mindmap />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full bg-light">
        <Navbar />
        <main className="flex-grow pt-16">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
