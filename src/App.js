
import "./App.css";
import NavBar from "./components/navbar/NavBar.js";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Divider from "./components/custom_components/Divider";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/work_experience/WorkExperience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { useEffect, useRef, useState } from "react";
import React from "react";
import MiniCircle from "./components/custom_components/MiniCircle";
import gsap from "gsap";
import LoadingScreen from "./components/custom_components/Loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {



    setTimeout(() => {
      setLoading(false);
    }, 1000);


    const buttons = document.querySelectorAll("a");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power.InOut" });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    });
  });
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   // Set up GSAP animation logic
  //   const container = containerRef.current;
  //   const scroller = container.querySelector('.scroller');
  //   const sections = container.querySelectorAll('.section');

  //   // Define the timeline for horizontal scroll animation
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top top',
  //       end: () => `+=${container.offsetWidth}`,
  //       scrub: 1,
  //       markers: true, // Remove this line in production
  //     },
  //   });

  //   // Animate the horizontal scroll
  //   tl.to(sections, {
  //     x: () => -(sections[0].offsetWidth * (sections.length - 1)),
  //     duration: 1,
  //     ease: 'none',
  //   });

  //   // Cleanup
  //   return () => {
  //     tl.scrollTrigger.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     // Enable smooth scrolling
  //   });

  // }, []);

  return (
    <div className="App"  >
        // Show the content when loading is false
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
