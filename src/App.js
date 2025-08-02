import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { loadAllAssets } from './assetLoader';

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

import video from './images/video/introVideo.mp4';
import bmg from './images/pub/bgm/OST.mp3';
import logo from './images/pub/logo/로고.png';
import on from './images/pub/bgm/on.png';
import off from './images/pub/bgm/off.png';

import leftdoor1 from './images/pub/door/leftdoor1.png';
import leftdoor2 from './images/pub/door/leftdoor2.png';
import rightdoor1 from './images/pub/door/rightdoor1.png';
import rightdoor2 from './images/pub/door/rightdoor2.png';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false); // 에셋 로딩 완료 상태
  const [loadingProgress, setLoadingProgress] = useState(0); // 로딩 진행률 상태

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

  const mainIntroRef = useRef(null);
  const storySection1Ref = useRef(null);
  const storySection2Ref = useRef(null);
  const seriseRef = useRef(null);
  const pillarsRef = useRef(null);
  const productionIntroRef = useRef(null);
  const firstQuarterIntroRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

  const leftdoor1x = useTransform(scrollYProgress, [0.47, 0.5, 0.6, 0.62], [-485, 0, 0, -485]);
  const rightdoor2x = useTransform(scrollYProgress, [0.47, 0.5, 0.6, 0.62], [-485, 0, 0, -485]);

  const leftdoor2x = useTransform(scrollYProgress, [0.47, 0.5, 0.6, 0.62], [-485, 482, 482, -485]);
  const rightdoor1x = useTransform(scrollYProgress, [0.47, 0.5, 0.6, 0.62], [-485, 482, 482, -485]);

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

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    // 로딩 진행률을 업데이트하는 콜백 함수
    const handleProgress = (progress) => {
      setLoadingProgress(progress);
    };
    const assetsPromise = loadAllAssets(handleProgress);

    const minTimePromise = new Promise(resolve => {
      setTimeout(resolve, 7000); // 7000ms = 7초
    });

    Promise.all([assetsPromise, minTimePromise])
      .then(() => {
        // 로딩이 끝나면 스크롤을 맨 위로 강제 이동시킵니다.
        window.scrollTo(0, 0);
        setAssetsLoaded(true);
      })
      .catch(error => {
        console.error("에셋 로딩 실패:", error);
        window.scrollTo(0, 0); // 에러 발생 시에도 맨 위로
        setAssetsLoaded(true);
      });

    // // 로더를 실행합니다.
    // loadAllAssets(handleProgress)
    //   .then(() => {
    //     // 100%를 잠시 보여주기 위한 딜레이
    //     setTimeout(() => {
    //       setAssetsLoaded(true);
    //       // audioRef.current?.play().catch(error => console.log("Audio play failed:", error));
    //     }, 300);
    //   })
    //   .catch(error => {
    //     console.error("에셋 로딩 실패:", error);
    //     // 에러가 발생해도 앱이 멈추지 않도록 강제로 로딩 완료 처리
    //     setAssetsLoaded(true);
    //   });
  }, []);

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


  // 3단계: 모든 로딩 완료, 메인 콘텐츠 렌더링
  return (
    <>
      {/* 로딩이 완료되지 않았을 때만 Video 컴포넌트를 보여줍니다. */}
      {!assetsLoaded && <Video progress={loadingProgress} />}

      {/* BGM 오디오 요소 */}
      <audio
        ref={audioRef}
        src={bmg}
        loop
        muted={isMuted}
      />

      {/* 로고, 음소거 버튼 등 UI 요소 */}
      {logoVisible && (
        <div className='fixed top-6 left-10 z-[9999]'>
          <img src={logo} alt='logo' />
        </div>
      )}
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

      {/* 네비게이션 */}
      <div className='fixed top-1/2 -translate-y-1/2 right-12 z-[9999] flex flex-col space-y-2'>
        <button onClick={() => scrollToSection(mainIntroRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(storySection1Ref)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(storySection2Ref)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(seriseRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(movieRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(pillarsRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(firstQuarterIntroRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
        <button onClick={() => scrollToSection(productionIntroRef)} className="w-24 p-2 bg-white rounded bg-opacity-50"></button>
      </div>

      {/* 메인 콘텐츠 섹션 (항상 렌더링) */}
      <div ref={mainIntroRef}>
        <MainIntro onAnimationComplete={handleAnimationComplete} />
      </div>
      <div ref={storySection1Ref}>
        <StorySection1 />
      </div>
      <div ref={storySection2Ref}>
        <StorySection2 />
      </div>
      <SlideTxt />
      <div ref={seriseRef}>
        <Serise />
      </div>
      <div ref={movieRef}>
        <Movie />
      </div>

      <div ref={fullRef}>
        <div ref={pillarsRef}>
          <Pillars />
        </div>
        <div ref={firstQuarterIntroRef}>
          <FirstQuarterIntro />
        </div>
        {/* 문 애니메이션 이미지 */}
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
      <div ref={productionIntroRef}>
        <ProductionIntro />
      </div>
    </>
  );
}

export default App;