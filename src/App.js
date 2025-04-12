import './App.css';
import Video from './components/Video';
import Intro1 from './components/Intro1';
import bmg from './images/bgm/OST.mp3';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // 처음엔 muted로 시작해야 자동 재생 가능
  const audioRef = useRef(null);

  // 7초 후 로딩 끝
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(loadTimer);
  }, []);

  // loading이 false가 되면 오디오 재생 시도
  useEffect(() => {
    if (!loading && audioRef.current) {
      audioRef.current.muted = isMuted; // muted 설정 유지
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
        <div className='fixed bottom-[10%] right-[5%] z-[200] flex gap-3'>
          <button
            onClick={toggleMute}
            className='py-3 px-4 bg-black text-white rounded-xl'
          >
            {isMuted ? '🔇 Mute' : '🔊 Unmute'}
          </button>
        </div>
      )}

      {/* 컴포넌트 렌더링 */}
      {loading ? <Video /> : <Intro1 />}
    </>
  );
}

export default App;
