import React, { useEffect, useRef } from 'react';
import './MiniCircle.css';
import gsap from 'gsap';

const MiniCircle = () => {
  const minicircleRef = useRef(null);

  useEffect(() => {
    const changePosition = (event) => {
      console.log("X:"+event.clientX+" Y:"+event.clientY);
      gsap.set(minicircleRef.current, { pin: true, x: event.clientX - 8  , y: event.clientY - 28 , zIndex: 999999 });
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
