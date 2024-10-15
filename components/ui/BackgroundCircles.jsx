"use client";  // Marking as a Client Component

import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

const Rings = () => {
  return (
    <>
      <div className="absolute top-2/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[70.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[70.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[72.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};
    

  export const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <div className="absolute  left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2">
        <Rings />
  
        {/* Moving background colored circle balls */}
        
        <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[90deg]">
            <div
              className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#4fdd9f] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#47309a] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#c5dfae] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#39d267] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />  
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#3b8667] to-[#353594] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </MouseParallax>
      </div>
    );
  };
  
