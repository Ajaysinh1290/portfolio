
import "./App.css";
import NavBar from "./components/navbar/NavBar.js";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Divider from "./components/custom_components/divider/Divider";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/work_experience/WorkExperience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { useEffect, useRef, useState } from "react";
import React from "react";
import MiniCircle from "./components/custom_components/mini_circle/MiniCircle";
import gsap from "gsap";
function App() {

  useEffect(() => {

    const cursor = document.getElementById("minicircle");
    const buttons = document.querySelectorAll("a");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        // gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power.InOut" });
        gsap.to(cursor, { scale : 4.0 , duration : 0.2});
        
      });
      button.addEventListener("mouseleave", () => {
        // gsap.to(button, { scale: 1, duration: 0.2 });
        gsap.to(cursor, { scale : 1.0 , duration : 0.2});
      });
    });
  });


  return (
    <div className="App"  >
        <div style={{color:"transparent"}}>Ajaysinh Rathod Portfolio</div>
        <MiniCircle />
        <NavBar />
        <Hero />
        <Services />
        <Divider angle="-5.03" />
        <About />
        <Divider angle="3.97" />
        <Projects />
        <Divider angle="-4.53" />
        <WorkExperience />
        <Divider angle="3.03" />
        <Skills />
        <Divider angle="-5.03" />
        <Contact />
    </div>
  );
}


export default App;
