import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FontFaceObserver from 'fontfaceobserver';

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
import Section05 from './_view/Section05';

import leftdoor1 from './images/pub/door/leftdoor1.png';
import leftdoor2 from './images/pub/door/leftdoor2.png';
import rightdoor1 from './images/pub/door/rightdoor1.png';
import rightdoor2 from './images/pub/door/rightdoor2.png';



gsap.registerPlugin(ScrollTrigger);

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false); // 에셋 로딩 완료 상태
  const [loadingProgress, setLoadingProgress] = useState(0); // 로딩 진행률 상태

const imageAssets = [
  logo, on, off, leftdoor1, leftdoor2, rightdoor1, rightdoor2,
];

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
    const loadAssets = async () => {
      const totalAssets = imageAssets.length + 1; // 이미지 개수 + 폰트 1개
      let loadedCount = 0;

      // ---- 이미지 프리로딩 ----
      const imagePromises = imageAssets.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalAssets) * 100);
            resolve();
          };
          img.onerror = reject;
        });
      });

      // ---- 폰트 프리로딩 ----
      // const font = new FontFaceObserver('사용할 폰트 이름'); 
      // const fontPromise = font.load().then(() => {
      //   loadedCount++;
      //   setLoadingProgress((loadedCount / totalAssets) * 100);
      // });

      // await Promise.all([...imagePromises, fontPromise]);

      setTimeout(() => {
        setAssetsLoaded(true);
        // 로딩 완료 후 BGM 자동 재생 (브라우저 정책에 따라 사용자 인터랙션이 필요할 수 있음)
        audioRef.current?.play().catch(error => console.log("Audio play failed:", error));
      }, 500);
    };

    loadAssets();
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
      <div className='fixed bottom-8 right-10 z-[9999]'>
        {/* ... 음소거 버튼 JSX ... */}
      </div>

      {/* 👇 메인 콘텐츠 섹션 (항상 렌더링) */}
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
        {/* ... 문 애니메이션 이미지들 ... */}
        <motion.img src={leftdoor1} /* ... */ />
        <motion.img src={leftdoor2} /* ... */ />
        <motion.img src={rightdoor1} /* ... */ />
        <motion.img src={rightdoor2} /* ... */ />
      </div>

      <ProductionIntro />
    </>
  );
}

export default App;