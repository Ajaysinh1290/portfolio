import gsap from "gsap";
import "./Hero.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Animation for text elements (fade in)
    gsap.set("#firstname", {
      x: -100
    });
    gsap.to("#firstname", {
      x: 0,
      stagger: 0.5,
      duration: 1.8,
      ease: "power.inOut",
    });
    gsap.set("#designation", {
      x: 40
    });
    gsap.to("#designation", {
      x: 0,
      stagger: 0.5,
      duration: 1,
      ease: "power.inOut",
    });
    gsap.set("#lastnamesection ", {
      opacity: 0,
      x: 100
    });
    gsap.to("#lastnamesection", {
      opacity: 90,
      x: 0,
      duration: 1.2,
      ease: "power.inOut",
    });



  }, []);

  return (
    <div id="hero"  className="section">
      <div id="firstnamesection">
        <div id="firstname">AJAYSINH</div>
        <div id="designation">softwareEngineer</div>
      </div>
      <div id="lastnamesection">
        <span id="lastname">RATHOD</span>
        <div id="square">
          <span id="lastnamesquare">HOD</span>
        </div>
      </div>
      <div id="actionbuttons">
        <a
          id="viewresume"
          href="https://drive.google.com/file/d/1YW-AAgjrSJ7N2wbLQVLFmQX96acN4lIc/view?usp=sharing"
          target="_blank"
          className="action-button"
        >
          viewResume
        </a>
        <a
          id="sayhello"
          href="mailto:ajaysinhrathod1290@gmail.com"
          className="action-button"
        >
          sayHello
        </a>
      </div>
    </div>
  );
}

export default Hero;
