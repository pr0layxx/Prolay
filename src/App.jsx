import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="pt-16">
      <Navbar />

      {/* Transition wrapper for routing content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
