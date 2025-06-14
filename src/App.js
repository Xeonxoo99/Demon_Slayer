import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Video from './components/Video';
import MainIntro from './components/MainIntro';
import StorySection1 from './components/StorySection1';
import StorySection2 from './components/StorySection2';
import SlideTxt from './components/SlideTxt';
import Serise from './components/Serise';
import Movie from './components/Movie';
import Pillars from './components/Pillars';
import FirstQuarterIntro from './components/FirstQuarterIntro';
import ProductionIntro from './components/ProductionIntro';
import Door from './components/door';

import bmg from './images/pub/bgm/OST.mp3';
import logo from './images/pub/logo/로고.png';
import on from './images/pub/bgm/on.png';
import off from './images/pub/bgm/off.png';
import Section05 from './_view/Section05';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const [loading, setLoading] = useState(true);
  // const [isMuted, setIsMuted] = useState(false);
  // const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  // const [logoVisible, setLogoVisible] = useState(true);
  // const [isPillarsSectionEnd, setIsPillarsSectionEnd] = useState(false);
  // const audioRef = useRef(null);
  // const movieRef = useRef(null);
  // const pillarsEndRef = useRef(null);

  // useEffect(() => {
  //   const loadTimer = setTimeout(() => {
  //     setLoading(false);
  //   }, 7200);

  //   return () => clearTimeout(loadTimer);
  // }, []);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!loading && audioRef.current) {
  //     audioRef.current.muted = isMuted;
  //     audioRef.current.play().catch((e) => {
  //       console.log('Audio play error:', e);
  //     });
  //   }
  // }, [loading]);

  // const toggleMute = () => {
  //   if (audioRef.current) {
  //     audioRef.current.muted = !audioRef.current.muted;
  //     setIsMuted(audioRef.current.muted);
  //   }
  // };

  // const handleAnimationComplete = () => {
  //   setIsScrollEnabled(true);
  //   document.body.style.overflow = 'auto';
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (movieRef.current) {
  //       const movieTop = movieRef.current.getBoundingClientRect().top;
  //       setLogoVisible(movieTop > window.innerHeight / 2);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (isPillarsSectionEnd && pillarsEndRef.current) {
  //     const scrollToPillarsEnd = () => {
  //       const targetPosition = pillarsEndRef.current.offsetTop;
  //       window.scrollTo({
  //         top: targetPosition,
  //         behavior: 'smooth'
  //       });
  //     };
  //     scrollToPillarsEnd();
  //   }
  // }, [isPillarsSectionEnd]);

  // const handlePillarsSectionEnd = () => {
  //   setIsPillarsSectionEnd(true);
  // };

  // useEffect(() => {
  //   if (!loading) {
  //     const pillarsEnd = pillarsEndRef.current;
      
  //     ScrollTrigger.create({
  //       trigger: pillarsEnd,
  //       start: "top top",
  //       end: "+=100vh",
  //       pin: true,
  //       pinSpacing: true,
  //       anticipatePin: 1,
  //     });

  //     return () => {
  //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //     };
  //   }
  // }, [loading]);

  return (
    <>
      {/* <audio
        ref={audioRef}
        src={bmg}
        loop
        muted={isMuted}
      />
      {!loading && (
        <>
          {logoVisible && (
            <div className='fixed top-6 left-10 z-[9999]'>
              <img src={logo} alt='logo' />
            </div>
          )}
          <div className='fixed bottom-[10%] right-[5%] z-[9999] flex gap-3'>
            <button
              onClick={toggleMute}
              className='fixed bottom-8 right-10 z-[9999]'
            >
              {isMuted ? (
                <div className='w-[96px] h-[109px]'>
                  <img src={on} alt='on' />
                </div>
              ) : (
                <div className='w-[96px] h-[109px]'>
                  <img src={off} alt='off' />
                </div>
              )}
            </button>
          </div>
        </>
      )} */}
      {/* {loading ? (
        <Video />
      ) : ( */}
        <>
          {/* <MainIntro onAnimationComplete={handleAnimationComplete} />
          <StorySection1 />
          <StorySection2 />
          <SlideTxt />
          <Serise />
          <div ref={movieRef}>
            <Movie />
          </div> */}

          {/* <Pillars /> */}
          {/* <div ref={pillarsEndRef} className="h-screen bg-black" /> */}
          {/* <div className="scroll-target-pillars">
          </div>
          <div className="scroll-target-intro"> */}
            {/* <FirstQuarterIntro /> */}
          {/* </div> */}
          {/* <Door /> */}

          <Section05 />


          <ProductionIntro />
        </>
      {/* )} */}
    </>
  );
}

export default App;