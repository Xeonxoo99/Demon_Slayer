// Video.jsx

import introVideo from '../images/video/introVideo.mp4';

// 🔽 progress prop만 받습니다.
function Video({ progress }) {

  return (
    // z-index를 매우 높게 설정하여 다른 모든 콘텐츠 위에 오버레이되도록 합니다.
    <section className="fixed top-0 left-0 w-screen h-full overflow-hidden z-[99999] bg-black">
      <video
        // ref는 더 이상 필요 없습니다.
        autoPlay
        muted
        loop // 항상 반복 재생합니다.
        className="w-full h-full object-cover opacity-70"
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      
      {/* 로딩 바는 progress가 100 미만일 때 항상 표시됩니다. */}
      {/* {progress < 100 && ( */}
        <div className="absolute w-full bottom-0">
          <p className="text-[#e8111f] text-left mb-2 text-[160px] leading-none font-bold">{Math.round(progress)}<span className='text-4xl'>%</span></p>
          <div className="w-full bg-black h-2.5">
            <div
              className="bg-[#e8111f] h-2.5 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      {/* )} */}
    </section>
  );
}

export default Video;