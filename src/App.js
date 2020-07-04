import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power2 } from 'gsap';

import './App.css';
import BurgerLogo from './utils/images/burger-logo.svg';
import MainImage from './utils/images/low-angle-photo-of-volkswagen-kombi-2533092-high.jpg';

function App() {
  const heroRef = useRef();
  const sliderRef = useRef();
  const logoRef = useRef();
  const hamburgerRef = useRef();
  const headlineRef = useRef();

  useEffect(() => {
    const t1 = new TimelineMax();
    t1.fromTo(
      heroRef.current,
      1,
      { height: '0%' },
      { height: '80%', ease: Power2.easeInOut }
    )
      .fromTo(
        heroRef.current,
        1.2,
        { width: '100%' },
        { width: '80%', ease: Power2.easeInOut }
      )
      .fromTo(
        sliderRef.current,
        1.2,
        { x: '-100%' },
        { x: '0%', ease: Power2.easeInOut },
        '-=1.2'
      )
      .fromTo(
        logoRef.current,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        hamburgerRef.current,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        headlineRef.current,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      );
  }, [heroRef, sliderRef, logoRef, hamburgerRef, headlineRef]);

  return (
    <React.Fragment>
      <header>
        <nav>
          <h3 id="logo" ref={logoRef}>
            Dream Vacation
          </h3>
          <img
            src={BurgerLogo}
            alt="hamburger"
            className="hamburger"
            ref={hamburgerRef}
          />
        </nav>
        <section>
          <div className="hero" ref={heroRef}>
            <img src={MainImage} alt="MainImage" />
            <h1 className="headline" ref={headlineRef}>
              Dream Big
            </h1>
          </div>
        </section>
      </header>

      <div className="slider" ref={sliderRef}></div>
    </React.Fragment>
  );
}

export default App;
