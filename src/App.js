import './App.css';
import Video from './components/Video';
import MainIntro from './components/MainIntro';
import StorySection1 from './components/StorySection1';
import StorySection2 from './components/StorySection2';
import SlideTxt from './components/SlideTxt';
import Serise from './components/Serise'
import Movie from './components/Movie'

import bmg from './images/pub/bgm/OST.mp3';
import logo from './images/pub/logo/로고.png';
import on from './images/pub/bgm/on.png';
import off from './images/pub/bgm/off.png';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false); // 스크롤 제어
  const audioRef = useRef(null);

  // 7.2초 후 로딩 끝
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 7200);

    return () => clearTimeout(loadTimer);
  }, []);

  // 앱 전체 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 초기 스크롤 비활성화

    return () => {
      document.body.style.overflow = ''; // cleanup 시 초기화
    };
  }, []);

  // loading이 false가 되면 오디오 재생 시도
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

  // MainIntro 애니메이션 완료 시 스크롤 활성화
  const handleAnimationComplete = () => {
    setIsScrollEnabled(true);
    document.body.style.overflow = 'auto';
    console.log('Scroll enabled'); // 디버깅용
  };

  return (
    <>
      {/* BGM */}
      <audio
        ref={audioRef}
        src={bmg}
        loop
        autoPlay
        muted={isMuted}
      />

      {/* 버튼 */}
      {!loading && (
        <>
          <div className='fixed top-6 left-10 z-[9999]'>
            <img src={logo} alt='logo' />
          </div>
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

      {/* 컴포넌트 렌더링 */}
      {loading ? (
        <Video />
      ) : (
        <>
          <MainIntro onAnimationComplete={handleAnimationComplete} />
          <StorySection1 />
          <StorySection2 />
          <SlideTxt/>
          <Serise/>
          <Movie/>
        </>
      )}
    </>
  );
}

export default App;