import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Detect if the device is an iPhone
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIphoneDetected = /iPhone/.test(userAgent);
    setIsIPhone(isIphoneDetected);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas
            icon={technology.icon}
            isAndroid={isMobile && !isIPhone}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
