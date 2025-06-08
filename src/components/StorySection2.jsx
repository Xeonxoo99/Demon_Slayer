import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import bg from '../images/story2/배경.png';
import bg2 from '../images/story2/배경2.png';
import rock from '../images/story2/돌.png';
import fireEffect from '../images/story2/불꽃효과.mp4';

function StorySection2() {
  const containerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0); // 현재 이미지 프레임
  const [hasPlayed, setHasPlayed] = useState(false); // 애니메이션 재생 여부
  const totalFrames = 150; // burn_Transition_00000.webp ~ burn_Transition_00149.webp

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 배경 및 텍스트 투명도 설정
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]);
  const bg1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const bg2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.9, 1], [20, 0]);
  // 이미지 시퀀스의 투명도: 스크롤 0.6~1.0에서 표시
  const imageSequenceOpacity = useTransform(scrollYProgress, [0.59, 0.6], [0, 1]);

  // 텍스트 전환을 위한 상태
  const [showSecondText, setShowSecondText] = useState(false);

  // 스크롤 진행도에 따라 텍스트 전환 및 이미지 시퀀스 프레임 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setShowSecondText(latest >= 0.4);

      // scrollYProgress 0.6~1.0을 0~149 프레임으로 매핑
      if (latest >= 0.6 && latest <= 1.0) {
        const frameProgress = (latest - 0.6) / 0.4;
        const frame = Math.floor(frameProgress * totalFrames);
        setCurrentFrame(frame);
      } else if (latest < 0.6) {
        setCurrentFrame(0);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasPlayed]);

  // 이미지 경로 생성 (burn_Transition_XXXXX.webp)
  const getFrameSrc = (frame) => {
    return `/fireEffectWebp/burn_Transition_${String(frame).padStart(5, '0')}.webp`;
  };

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = getFrameSrc(i);
      }
    };

    preloadImages();
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="text-[#ffffff]"
      style={{
        height: '600vh',
        fontFamily: 'ChosunKm',
        zIndex: 99,
      }}
    >
      <motion.div style={{ opacity: sectionOpacity }}>
        {/* 배경 이미지 */}
        <motion.img
          src={bg}
          alt="배경 1"
          className="w-full h-screen object-cover fixed top-0 left-0"
          style={{ zIndex: 1, opacity: bg1Opacity }}
        />
        <motion.img
          src={bg2}
          alt="배경 2"
          className="w-full h-screen object-cover fixed top-0 left-0"
          style={{ zIndex: 1, opacity: bg2Opacity }}
        />

        {/* 이미지 시퀀스 */}
        <motion.img
          src={getFrameSrc(currentFrame)}
          alt="Burn transition effect"
          className="w-full h-screen object-cover fixed top-0 left-0"
          style={{ zIndex: 20, opacity: imageSequenceOpacity }}
        />

        {/* 불꽃 효과 비디오 */}
        <motion.video
          className="w-full h-screen object-cover fixed top-0 left-0 opacity-50"
          style={{ zIndex: 20 }}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background fire effect video"
        >
          <source src={fireEffect} type="video/mp4" />
        </motion.video>


        {/* 텍스트 컨테이너 */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] flex flex-col items-center justify-center gap-4"
          style={{ zIndex: textOpacity }}
        >
          <span className="text-[28px]">다이쇼 시대</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={showSecondText ? 'second' : 'first'}
              className="text-[54px] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {showSecondText ? (
                <>
                  나는 이제 끝없는 <br /> 싸움을 향해 나아간다.
                </>
              ) : (
                <>
                  새해 첫 날, <br /> 가족을 잃었다.
                </>
              )}
            </motion.span>
          </AnimatePresence>
          <span className="text-[28px]">1912年 1月 1日</span>
        </div>

        {/* 바위 이미지 */}
        <img
          src={rock}
          alt="바위"
          className="w-full object-cover fixed -bottom-12"
          style={{ zIndex: 20 }}
        />
      </motion.div>
    </motion.section>
  );
}

export default StorySection2;