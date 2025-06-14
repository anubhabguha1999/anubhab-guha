import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { slideIn } from "../utils/motion";
import { i } from "maath/dist/index-43782085.esm";
import ProfileCard from "./ProfileCard";
import profile from "../assets/projects/profile.png";

const Hero = ({ showCard }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);
  const showDetails = () => {
    if (isIPhone) return true;
    return !showCard;
  };
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

  const card = (
    <div
      className={`absolute ${
        !showDetails() ? "bottom-[10%]" : "bottom-10"
      } w-full flex justify-center items-center`}
    >
      <ProfileCard
        name="Anubhab Guha"
        title="Software Developer"
        handle="anubhab_guha"
        avatarUrl={profile}
        onContactClick={() => {
          if (window.location.hash === "#contact") {
            history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          }
          setTimeout(() => {
            window.location.hash = "contact";
          }, 0);
        }}
      />
    </div>
  );
  const iPhone = () => {
    if (showCard) return card;
    return (
      <>
        {/* <ComputersCanvas /> */}
        <div className="absolute bottom-0 left-20 right-0 h-[60%] sm:h-[70%] xs:h-[70%] flex justify-center items-end">
          <Spline scene="https://prod.spline.design/9A64PvC7XUsYdVut/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/SZtVMfA-wA156hmt/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/D3mvoh1nifh0Ly0T/scene.splinecode" /> */}
        </div>
        {/* {isMobile && (
          <div className="absolute bottom-[9rem] w-full flex justify-center items-center">
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
        )} */}
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
      {showDetails() && (
        <div
          className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Anubhab</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 mb-4`}>
              I'm a full-stack developer with 2+ years experience{" "}
              <br className="sm:block hidden" />
              of using Full Stack Development. Reach out if you'd like to know
              more.
            </p>
          </div>
        </div>
      )}
      {renderContent()}
      {isMobile && !isIPhone && card}
    </section>
  );
};

export default Hero;
