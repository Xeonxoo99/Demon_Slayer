import { useState, useEffect } from 'react';
import introVideo from '../images/video/introVideo.mp4';
function Video({ progress }) {
  const [displayNumber, setDisplayNumber] = useState(progress);

  useEffect(() => {
    if (progress === 100 && displayNumber < 100) {
      let currentNum = 90; 
      const interval = setInterval(() => {
        currentNum++;
        if (currentNum <= 100 ) {
          setDisplayNumber(currentNum);
        } else {
          clearInterval(interval);
        }
      }, 25);
      return () => clearInterval(interval);
    } else if (progress < 100) {
      setDisplayNumber(progress);
    }
  }, [progress]);

  return (
    <section className="fixed top-0 left-0 w-screen h-full overflow-hidden z-[99999] bg-black">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover opacity-70"
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="absolute w-full bottom-0">
        <p className="text-[#e8111f] text-left mb-2 text-[160px] leading-none font-bold">
          {Math.round(displayNumber)}<span className='text-4xl'>%</span>
        </p>
        <div className="w-full bg-black h-2.5">
          <div
            className="bg-[#e8111f] h-2.5" // className에서 transition 관련 속성 제거
            style={{
              width: `${progress}%`,
              // 0-90% 구간의 애니메이션 시간을 0.5초로 줄여 숫자와 속도를 맞추기
              transition: `width ${progress > 90 ? '0.4s' : '0.5s'} ease-out`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Video;