
"use client";  

import { useRef } from "react";
import CentreBody from "@/components/CentreBody";
import { BackgroundCircles } from "@/components/design/backgroundcircles";


export default function Home() {
  // Create a reference for the parallax container
  const parallaxRef = useRef(null);

  return (
    
    
    <div>
      <BackgroundCircles parallaxRef={parallaxRef} />
 

      {/* Main content */}
      <div ref={parallaxRef} style={{ zIndex: 1, position: "relative" }}>
     
        <CentreBody  />
        
      </div>
    </div>
  );
}


