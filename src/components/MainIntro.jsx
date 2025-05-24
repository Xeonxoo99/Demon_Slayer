import React, { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import text from '../images/mainIntro/el/메인한자 사각형.png';
import effect from '../images/mainIntro/el/효과.png';
import fog from '../images/mainIntro/el/안개.png';
import arrow from '../images/mainIntro/el/스크롤 다운 4.png';

import tanjiro from '../images/mainIntro/el/탄지로.png';
import Giyuu from '../images/mainIntro/el/기유.png';
import Shinobu from '../images/mainIntro/el/시노부.png';
import Sanemi from '../images/mainIntro/el/사네미.png';
import Muichiro from '../images/mainIntro/el/무이치로.png';
import Obanai from '../images/mainIntro/el/이구로.png';
import Mitsuri from '../images/mainIntro/el/미츠리.png';
import Gyomei from '../images/mainIntro/el/교메이.png';

const characters = [
  { src: tanjiro, alt: 'tanjiro', style: 'bottom-[-5%] right-[12%]', moveDistance: 25 },
  { src: Giyuu, alt: 'giyuu', style: 'bottom-[-3%] left-[17%]', moveDistance: 25 },
  { src: Obanai, alt: 'obanai', style: 'bottom-[40%] right-[18%]', moveDistance: 20 },
  { src: Muichiro, alt: 'muichiro', style: 'bottom-[30%] left-[16%]', moveDistance: 20 },
  { src: Mitsuri, alt: 'mitsuri', style: 'top-[15%] right-[21%]', moveDistance: 15 },
  { src: Gyomei, alt: 'gyomei', style: 'top-[18%] left-[12%]', moveDistance: 15 },
  { src: Sanemi, alt: 'sanemi', style: 'top-[8%] right-[35%]', moveDistance: 10 },
  { src: Shinobu, alt: 'shinobu', style: 'top-[8%] left-[33%]', moveDistance: 10 },
];

function MainIntro({ onAnimationComplete }) {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.from({ length: 61 }, (_, i) => `/mainIntroWebp/${i.toString().padStart(4, '0')}.webp`);
  const totalFrames = images.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentImageIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0.9]);
  // 캐릭터들 스케일. 오퍼시티 다 따로 관리
  const charScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 2, 3]);
  // 이동도 x축 y축으로 이동
  const charOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);


  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const leftTextOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const effectOpacity = useTransform(scrollYProgress, [0, 0.7], [0.1, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const finalTextOpacity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 0.8, 0]);

  const [showFinalText, setShowFinalText] = useState(false);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const randomDirections = useRef(
    characters.map(() => {
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      return {
        x: Math.abs(x) < 0.2 ? (x >= 0 ? 0.2 : -0.2) : x,
        y: Math.abs(y) < 0.2 ? (y >= 0 ? 0.2 : -0.2) : y,
      };
    })
  );

  // 초기 애니메이션 완료 및 콜백 호출
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialAnimationDone(true);
      onAnimationComplete(); // App.js에 알림
    }, 4500); // 3초 지연 + 1.5초 애니메이션
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // 마우스 이동 이벤트
  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const normalizedX = (e.clientX - centerX) / centerX;
        const normalizedY = (e.clientY - centerY) / centerY;
        setMousePos({ x: normalizedX, y: normalizedY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 이미지 프리로딩
  useEffect(() => {
    const preloadImages = [text, fog, effect, ...characters.map((c) => c.src)];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.7 && latest <= 0.9) {
        setShowFinalText(true);
      } else {
        setShowFinalText(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const unsubscribe = currentImageIndex.on('change', (latest) => {
      const newImageNumber = Math.floor(latest);
      if (newImageNumber !== currentImage) {
        setCurrentImage(newImageNumber);
      }
    });
    return () => unsubscribe();
  }, [currentImageIndex, currentImage]);

  const charRefs = useRef([]);
  const effectRef = useRef(null);
  const [imageSizes, setImageSizes] = useState(
    characters.map(() => ({ width: 0, height: 0 }))
  );

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSizes((prev) => {
      const newSizes = [...prev];
      newSizes[index] = { width: naturalWidth, height: naturalHeight };
      return newSizes;
    });
  };

  return (
    <motion.section
      ref={containerRef}
      style={{
        height: '800vh',
        position: 'relative',
        fontFamily: 'ChosunGs',
        opacity: sectionOpacity,
        zIndex:1
      }}
    >
      {/* 배경 이미지 시퀀스 */}
      <motion.img
        src={images[currentImage]}
        alt="background"
        style={{
          opacity: bgOpacity,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* 캐릭터들 */}
      {characters.map((char, idx) => (
        <motion.div
          id="character"
          key={idx}
          // initial={{ opacity: 0, scale: 0.9, y: -50 }}
          // animate={{ opacity: 1, scale: 1, y: 0 }}
          // transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          className={`fixed ${char.alt === 'tanjiro' ? 'z-20' : 'z-10'} pointer-events-none ${char.style} translate-x-[-50%]`}
          ref={(el) => (charRefs.current[idx] = el)}
          style={{
            scale: charScale,
            opacity: charOpacity,
            x: isInitialAnimationDone && !showFinalText ? mousePos.x * char.moveDistance * randomDirections.current[idx].x : 0,
            y: isInitialAnimationDone && !showFinalText ? mousePos.y * char.moveDistance * randomDirections.current[idx].y : 0,
            transition: 'transform 1s ease-out',
          }}
        >
          <img
            src={char.src}
            alt={char.alt}
            onLoad={(e) => handleImageLoad(idx, e)}
            style={{
              width: imageSizes[idx].width ? `${imageSizes[idx].width}px` : 'auto',
              height: imageSizes[idx].height ? `${imageSizes[idx].height}px` : 'auto',
            }}
            className="object-contain"
          />
        </motion.div>
      ))}

      {/* 바람 효과 */}
      <motion.div
        ref={effectRef}
        className="fixed w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity: effectOpacity }}
      >
        <img src={effect} alt="effect" className="w-full h-auto object-contain" />
      </motion.div>

      {/* 안개 효과 */}
      <motion.img
        id="fog"
        src={fog}
        alt="fog"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-auto object-contain opacity-10"
        transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
      />

      {/* 한자 */}
      <motion.img
        id="text"
        src={text}
        alt="text"
        // initial={{ opacity: 0, scale: 0.9 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
        transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
        style={{ opacity: textOpacity }}
      />

      {/* 좌측 하단 텍스트 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 3 }}
        style={{ opacity: leftTextOpacity }}
        className="fixed bottom-8 left-10 font-[16px] text-[#ffffff] flex flex-col"
      >
        <span>귀살대는 상처도 회복도 더딘 인간이지만,</span>
        <span>도깨비에 맞서 싸운다. 오직 인간을 지키기 위해.</span>
      </motion.div>

      {/* 마지막 스크롤 시 나타나는 텍스트 */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-center"
        style={{ opacity: finalTextOpacity }}
      >
        <h1 className="text-[60px] font-semibold mb-4 tracking-[0.2em]">악귀멸살</h1>
        <span className="text-[24px] leading-[44px] tracking-widest">
          그 숫자는 대략 수백 명.
          <br />
          정부로부터 정식으로 인정받지 못한 조직.
          <br />
          그러나 예로부터 존재해왔고,
          <br />
          오늘도 도깨비를 사냥한다,
        </span>
      </motion.div>

      {/* 스크롤 표시 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: !showFinalText ? [0, -10, 0] : 0,
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeInOut', delay: 3 },
          scale: { duration: 1.5, ease: 'easeInOut', delay: 3 },
          y: {
            duration: 0.8,
            ease: 'easeInOut',
            repeat: !showFinalText ? Infinity : 0,
            delay: 2,
          },
        }}
        style={{ opacity: textOpacity }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <img src={arrow} alt="arrow" />
      </motion.div>
    </motion.section>
  );
}

export default MainIntro;