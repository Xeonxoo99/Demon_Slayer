import { useState, useEffect, useRef, useMemo  } from 'react';
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
import on1 from './images/pub/bgm/on1.png'
import on2 from './images/pub/bgm/on2.png'
import off from './images/pub/bgm/off.png';

import navi from './images/pub/navi/navi.png'
import naviActive from './images/pub/navi/navi-active.png'

import leftdoor1 from './images/pub/door/leftdoor1.png';
import leftdoor2 from './images/pub/door/leftdoor2.png';
import rightdoor1 from './images/pub/door/rightdoor1.png';
import rightdoor2 from './images/pub/door/rightdoor2.png';

gsap.registerPlugin(ScrollTrigger);

const onImages = [on, on1, on2];

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false); // 에셋 로딩 완료 상태
  const [loadingProgress, setLoadingProgress] = useState(0); // 로딩 진행률 상태
  const [displayProgress, setDisplayProgress] = useState(0);

  const [isMuted, setIsMuted] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [isPillarsSectionEnd, setIsPillarsSectionEnd] = useState(false);
  const [currentOnImageIndex, setCurrentOnImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('mainIntro');

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

  const sections = useMemo(() => [
    { id: 'mainIntro', ref: mainIntroRef, name: '메인' },
    { id: 'storySection1', ref: storySection1Ref, name: '스토리1' },
    { id: 'storySection2', ref: storySection2Ref, name: '스토리2' },
    { id: 'serise', ref: seriseRef, name: '시리즈' },
    { id: 'movie', ref: movieRef, name: '무비' },
    { id: 'pillars', ref: pillarsRef, name: '주' },
    { id: 'firstQuarter', ref: firstQuarterIntroRef, name: '상현' },
    { id: 'production', ref: productionIntroRef, name: '프로덕션' },
  ], []);


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
    // isMuted가 false일 때(음악이 켜져 있을 때)만 애니메이션을 실행
    if (!isMuted) {
      const interval = setInterval(() => {
        // onImages 배열의 다음 인덱스로 변경 (0 -> 1 -> 2 -> 0 반복)
        setCurrentOnImageIndex((prevIndex) => (prevIndex + 1) % onImages.length);
      }, 1000); // 0.2초마다 이미지를 변경 (속도 조절 가능)

      // 컴포넌트가 언마운트되거나 isMuted 상태가 true로 바뀌면 인터벌을 정리
      return () => clearInterval(interval);
    }
  }, [isMuted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // 화면의 정중앙을 기준으로 감지
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    // 컴포넌트 언마운트 시 observer 정리
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);
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
    // 페이지 새로고침 시 스크롤 위치 초기화
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // 실제 진행률을 업데이트하는 콜백
    const handleProgress = (progress) => {
      setLoadingProgress(progress);
    };

    // 로딩 시작
    const assetsPromise = loadAllAssets(handleProgress);

    // 최소 로딩 시간 (6.9초) 보장 Promise
    const minTimePromise = new Promise(resolve => {
      setTimeout(resolve, 6700); // 6.9초 후에 resolve
    });

    // 모든 에셋 로딩과 최소 시간 대기가 모두 완료되면 실행
    Promise.all([assetsPromise, minTimePromise])
      .then(() => {
        // 1. 먼저 화면에 표시될 값을 100으로 설정 (6.9초 시점)
        setDisplayProgress(100);

        // 2. 100%를 잠시 보여준 후 (0.1초), 메인 콘텐츠를 표시 (총 7초 시점)
        setTimeout(() => {
          window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
          setAssetsLoaded(true);  // 로딩 화면 숨기기
          // audioRef.current?.play().catch(e => console.log("BGM 재생 실패:", e));
        }, 300); // 0.1초 대기
      })
      .catch(error => {
        console.error("에셋 로딩 실패:", error);
        // 에러 발생 시에도 로딩 화면을 강제로 종료
        setAssetsLoaded(true);
      });
  }, []);

  // 실제 로딩률(loadingProgress)이 바뀔 때마다 화면 표시용(displayProgress) 값을 업데이트
  useEffect(() => {
    // 실제 로딩이 100%가 되기 전까지는 값을 동기화하되, 90을 넘지 않게 
    // 이렇게 하면 실제 로딩이 빨리 끝나도 화면에는 90%로 고정
    setDisplayProgress(Math.min(loadingProgress, 90));
  }, [loadingProgress]);

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

  return (
    <>
      {/* 로딩이 완료되지 않았을 때만 Video 컴포넌트를 보여줌 */}
      {!assetsLoaded && <Video progress={displayProgress} />}

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
        <div className='w-[96px] h-[109px]'>
          {isMuted ? (
            // 음소거 상태일 때는 'off' 이미지를 보여줌
            <img src={off} alt='BGM off' />
          ) : (
            // 음소거가 아닐 때는 애니메이션되는 'on' 이미지를 보여줌
            <img src={onImages[currentOnImageIndex]} alt='BGM on' />
          )}
        </div>
      </button>

      {/* 네비게이션 */}
      <div className='fixed top-1/2 -translate-y-1/2 right-12 z-[99999] flex flex-col space-y-2'>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.ref)}
            className="w-24 p-2 transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src={activeSection === section.id ? naviActive : navi} 
              alt={`${section.name} navigation`} 
            />
          </button>
        ))}
      </div>

      {/* 메인 콘텐츠 섹션 (항상 렌더링) */}
      <div id="mainIntro" ref={mainIntroRef}>
        <MainIntro onAnimationComplete={handleAnimationComplete} />
      </div>
      <div id="storySection1" ref={storySection1Ref}>
        <StorySection1 />
      </div>
      <div id="storySection2" ref={storySection2Ref}>
        <StorySection2 />
      </div>
      <SlideTxt />
      <div id="serise" ref={seriseRef}>
        <Serise />
      </div>
      <div id="movie" ref={movieRef}>
        <Movie />
      </div>

      <div ref={fullRef}>
        <div id="pillars" ref={pillarsRef}>
          <Pillars />
        </div>
        <div id="firstQuarter" ref={firstQuarterIntroRef}>
          <FirstQuarterIntro />
        </div>
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
      <div id="production" ref={productionIntroRef}>
        <ProductionIntro />
      </div>
    </>
  );
}

export default App;