import { DiceFive } from "phosphor-react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
      <Features />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
