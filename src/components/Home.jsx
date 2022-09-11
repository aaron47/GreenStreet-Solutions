import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from '../particles.json';
import { ImDownload3 } from 'react-icons/im';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import Features from './Features';
import { Link } from 'react-router-dom';
import PurchaseSection from './PurchaseSection';
import videoplayback from '../assets/videoplayback.mp4';

const Home = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 1500);
  }, []);

  if (loader) {
    return (
      <div id="background" className="z-[900]">
        <LoadingSpinner className="bg-slate-800 w-full h-full" />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Particles options={particlesOptions} init={particlesInit} />
          <video
            className="sm:-z-10 w-full fixed h-full"
            id="video"
            autoPlay
            muted
            loop
          >
            <source src={videoplayback} type="video/mp4" />
          </video>

          <header
            className="flex flex-col justify-center text-center items-center h-screen align-center"
            id="header"
          >
            <h1 className="sm:text-[2.35em]  md:text-[4.35em] text-white font-bold uppercase leading-4 mb-5 ">
              GreenStreet.Solutions
            </h1>
            <h2 className="sm:text-[1.35em] md:text-[2.35em] text-white uppercase tracking-wider font-light mb-5 mt-3">
              #1 League of Legends and Valorant Coach, Booster and Scripter
            </h2>
            <h3 className="sm:text-[1em] md:text-[1.35em] tracking-wide uppercase font-medium text-white mb-5">
              Download GreenStreet.exe Now!
            </h3>
            <nav>
              <ul className="flex">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    class="w-full"
                    target="_blank"
                    className="circle mr-5 mb-3 hover:scale-125 ease-in duration-300"
                  >
                    <ImDownload3 color="#e81351" size={35} />
                  </a>
                  <span className="text-white mr-3">Download</span>
                </li>

                <li>
                  <Link
                    className="circle mb-3"
                    to="/features"
                    class="circle mb-3 hover:scale-125 ease-in duration-300"
                    target="_blank"
                  >
                    <FaMoneyCheckAlt color="#e81351" size={35} />
                  </Link>
                  <span className="text-white mr-[1.5]">Buy Now!</span>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <Features />
        <PurchaseSection />
      </div>
    );
  }
};

export default Home;
