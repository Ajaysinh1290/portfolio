import React, { useEffect, useRef } from 'react';
import './MiniCircle.css';
import gsap from 'gsap';

const MiniCircle = () => {
  const minicircleRef = useRef(null);

  useEffect(() => {
    const changePosition = (event) => {
      // minicircleRef.current.style.top = `${event.clientY}px`;
      // minicircleRef.current.style.left = `${event.clientX}px`;
      // console.log("x: " + event.screenX + " y: " + event.screenY);
      gsap.to(minicircleRef.current, { pin: true, x: event.clientX + 50, y: event.clientY + 50, zIndex: 999999 });
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
