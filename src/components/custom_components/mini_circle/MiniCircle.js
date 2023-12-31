import React, { useEffect, useRef } from 'react';
import './MiniCircle.css';
import gsap from 'gsap';

const MiniCircle = () => {
  const minicircleRef = useRef(null);

  useEffect(() => {
    const changePosition = (event) => {
      gsap.to(minicircleRef.current, { pin: true, x: event.clientX - 8  , y: event.clientY - 28 , zIndex: 999999 ,duration : 0.4 , ease: "power3.inOut`" });
    };
    gsap.set(minicircleRef, { pin: true, zIndex: 999999 });

    document.addEventListener("mousemove", changePosition);

    return () => {
      document.removeEventListener("mousemove", changePosition);
    };
  }, []);

  return (
    <div id="minicircle" ref={minicircleRef}></div>
  );
};

export default MiniCircle;
