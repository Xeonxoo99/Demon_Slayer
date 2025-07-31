import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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


import bmg from './images/pub/bgm/OST.mp3';
import logo from './images/pub/logo/로고.png';
import on from './images/pub/bgm/on.png';
import off from './images/pub/bgm/off.png';
import Section05 from './_view/Section05';

import leftdoor1 from './images/pub/door/leftdoor1.png';
import leftdoor2 from './images/pub/door/leftdoor2.png';
import rightdoor1 from './images/pub/door/rightdoor1.png';
import rightdoor2 from './images/pub/door/rightdoor2.png';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [isPillarsSectionEnd, setIsPillarsSectionEnd] = useState(false);
  const audioRef = useRef(null);
  const movieRef = useRef(null);
  const pillarsEndRef = useRef(null);

  const containerRef = useRef(null);
  const fullRef = useRef(null);

  const { scrollYProgress: scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["start start", "end end"],
  });

  // 가로스크롤
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-4338px"] // 6258px - 1920px 
  );

  // 가로스크롤과 상현섹션 중간에 door 효과 추가
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0.45, 0.46, 0.6, 0.61],
  //   [0, 1, 1, 0]
  // );

  const leftdoor1x = useTransform(scrollYProgress, [0.59, 0.62,0.63,0.65], [-485, 0, 0, -485]);
  const rightdoor2x = useTransform(scrollYProgress, [0.59, 0.62,0.63,0.65], [-485, 0, 0, -485]);

  const leftdoor2x = useTransform(scrollYProgress, [0.59, 0.62, 0.63,0.65], [-485, 482, 482, -485]);
  const rightdoor1x = useTransform(scrollYProgress, [0.59, 0.62, 0.63,0.65], [-485, 482, 482, -485]);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 7200);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!loading && audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.play().catch((e) => {
        console.log('Audio play error:', e);
      });
    }
  }, [loading]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleAnimationComplete = () => {
    setIsScrollEnabled(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (movieRef.current) {
        const movieTop = movieRef.current.getBoundingClientRect().top;
        setLogoVisible(movieTop > window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPillarsSectionEnd && pillarsEndRef.current) {
      const scrollToPillarsEnd = () => {
        const targetPosition = pillarsEndRef.current.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      };
      scrollToPillarsEnd();
    }
  }, [isPillarsSectionEnd]);

  const handlePillarsSectionEnd = () => {
    setIsPillarsSectionEnd(true);
  };

  useEffect(() => {
    if (!loading) {
      const pillarsEnd = pillarsEndRef.current;

      ScrollTrigger.create({
        trigger: pillarsEnd,
        start: "top top",
        end: "+=100vh",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [loading]);

  return (
    <>
      <audio
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
      )}
      {loading ? (
        <Video />
      ) : (
      <>
        <MainIntro onAnimationComplete={handleAnimationComplete} />
        <StorySection1 />
        <StorySection2 />
        <SlideTxt />
        <Serise />
        <div ref={movieRef}>
          <Movie />
        </div>

        <div ref={fullRef}>
          <Pillars />
          <FirstQuarterIntro />

          <motion.img
            src={leftdoor1}
            className="fixed top-0 left-0 w-[485px] h-screen z-[9999] pointer-events-none"
            style={{ left: leftdoor1x }}
          />
          <motion.img
            src={leftdoor2}
            className="fixed top-0 left-[485px] w-[486px] h-screen z-[9998] pointer-events-none"
            style={{ left: leftdoor2x }}
          />
          <motion.img
            src={rightdoor1}
            className="fixed top-0 right-[485px] w-[486px] h-screen z-[9998] pointer-events-none"
            style={{ right: rightdoor1x }}
          />
          <motion.img
            src={rightdoor2}
            className="fixed top-0 right-0 w-[485px] h-screen z-[9999] pointer-events-none"
            style={{ right: rightdoor2x }}
          />
        </div>

        <ProductionIntro />

      </>
      )}
    </>
  );
}

export default App;