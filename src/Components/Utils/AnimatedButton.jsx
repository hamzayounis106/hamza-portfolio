import React from "react";
import gsap from "gsap";
export default function AnimatedButton({ text, specialClass }) {
  const animatedButtonEnter = () => {
    gsap.to(".button_animate", {
      scaleY: 1,
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "center center",
      opacity: 1,
    });
  };
  const animatedButtonLeave = () => {
    gsap.to(".button_animate", {
      scaleY: 0,
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "center center",
      opacity: 0,
    });
  };
  return (
    <>
      <button
        onMouseLeave={animatedButtonLeave}
        onMouseEnter={animatedButtonEnter}
        className={`lg:text-start text-center   z-[10000] mt-4  h-[3rem] uppercase text-white border-4 animatedButton  border-[#6D95FC] ${specialClass} rounded-lg `}
      >
        <span className=" z-[200] button_animate absolute object-cover  w-full top-0 h-full  scale-y-0 bg-[#6D95FC] opacity-0"></span>
        <span className="p-5 py-5 z-[300] relative"> {text}</span>
      </button>
    </>
  );
}
