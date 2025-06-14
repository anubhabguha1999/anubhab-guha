import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  CardsSwap,
} from "./components";

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [showCardsSwap, setShowCardsSwap] = useState(false);

  const heroRef = useRef(null);
  const worksRef = useRef(null);
  const cardsSwapRef = useRef(null);

  // Lazy load Hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHero(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Lazy load Works
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWorks(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (worksRef.current) observer.observe(worksRef.current);
    return () => observer.disconnect();
  }, []);

  // Lazy load CardsSwap
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCardsSwap(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardsSwapRef.current) observer.observe(cardsSwapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar showCard={showCard} setShowCard={setShowCard} />

          {/* Lazy Hero */}
          <div ref={heroRef} style={{ minHeight: "100px" }}>
            {showHero && <Hero showCard={showCard} />}
          </div>
        </div>

        {/* Lazy CardsSwap */}
        <div ref={cardsSwapRef} style={{ minHeight: "100px" }}>
          {showCardsSwap && <CardsSwap />}
        </div>

        <About />
        <Experience />
        <Tech />

        {/* Lazy Works */}
        <div ref={worksRef} style={{ minHeight: "100px" }}>
          {showWorks && <Works />}
        </div>

        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
