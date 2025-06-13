import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { slideIn } from "../utils/motion";
import { i } from "maath/dist/index-43782085.esm";

const Hero = () => {
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
  const iPhone = () => {
    return (
      <>
        <ComputersCanvas />
        <div className="hidden sm:block">
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </div>
      </>
    );
  };
  const renderContent = () => {
    if (isMobile) {
      if (isIPhone) {
        return iPhone();
      } else return null;
    } else return iPhone();
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Anubhab</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full-stack developer with 2+ years experience{" "}
            <br className="sm:block hidden" />
            of using Full Stack Development.
          </p>
          {isMobile && !isIPhone && (

          <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-base font-medium mt-6">
  <li>
    🚀 Building seamless full-stack experiences — from beautiful
    frontends to powerful backends.
  </li>
  <li>
    ⚙️ Turning ideas into scalable, maintainable products with React,
    Node.js, and modern web technologies.
  </li>
  <li>
    💡 Passionate about performance, clean architecture, and
    delightful user experiences.
  </li>
  <li>
    🧠 Always learning — exploring emerging tools and frameworks to
    stay ahead in the tech curve.
  </li>
  <li>
    🤝 Collaborating closely with teams to deliver high-quality
    software that solves real problems.
  </li>
  <li>
    📦 Writing reusable, testable, and efficient code with a focus on
    long-term maintainability.
  </li>
  <li>
    🧰 Skilled in debugging and optimizing applications for performance and scalability.
  </li>
  <li>
    🎯 Focused on delivering pixel-perfect UI and intuitive UX across devices.
  </li>
  <li>
    🔐 Emphasizing security best practices in every layer of the stack.
  </li>
</ul>

          )}
        </div>
      </div>
      {renderContent()}
    </section>
  );
};

export default Hero;
