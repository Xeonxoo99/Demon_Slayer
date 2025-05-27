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

import { useState, useEffect, useRef } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true); // ✅ 로고 표시 여부 상태 추가
  const audioRef = useRef(null);
  const movieRef = useRef(null); // ✅ Movie 위치 추적용 ref

  // 7.2초 후 로딩 끝
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 7200);

    return () => clearTimeout(loadTimer);
  }, []);

  // 앱 전체 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // 로딩 끝나면 오디오 재생
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

  // ✅ 스크롤 시 로고 표시 여부 조정
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

  return (
    <>
      {/* BGM */}
      <audio
        ref={audioRef}
        src={bmg}
        loop
        muted={isMuted}
      />

      {/* 로고 & 버튼들 */}
      {!loading && (
        <>
          {/* ✅ 로고: Movie 컴포넌트 도달 시 사라짐 */}
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

      {/* 콘텐츠 */}
      {loading ? (
        <Video />
      ) : (
        <>
          <MainIntro onAnimationComplete={handleAnimationComplete} />
          <StorySection1 />
          <StorySection2 />
          <SlideTxt />
          <Serise />
          <div ref={movieRef}> {/* Movie 위치 감지용 */}
            <Movie />
          </div>
          {/* <div ref={doorRef}> */}
            <Pillars />
            <FirstQuarterIntro />
          {/* </div> */}
          <ProductionIntro />
        </>
      )}
    </>
  );
}

export default App;
