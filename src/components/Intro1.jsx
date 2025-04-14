import React, { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import text from '../images/intro1/el/메인한자 사각형.png';
import effect from '../images/intro1/el/효과.png';
import fog from '../images/intro1/el/안개.png';
import tanjiro from '../images/intro1/el/탄지로.png';
import Giyuu from '../images/intro1/el/기유.png';
import Shinobu from '../images/intro1/el/시노부.png';
import Sanemi from '../images/intro1/el/사네미.png';
import Muichiro from '../images/intro1/el/무이치로.png';
import Obanai from '../images/intro1/el/이구로.png';
import Mitsuri from '../images/intro1/el/미츠리.png';
import Gyomei from '../images/intro1/el/교메이.png';

const characters = [
  { src: tanjiro, alt: 'tanjiro', style: 'bottom-[-5%] right-[12%]' },
  { src: Giyuu, alt: 'giyuu', style: 'bottom-[-3%] left-[17%]' },
  { src: Obanai, alt: 'obanai', style: 'bottom-[40%] right-[18%]' },
  { src: Muichiro, alt: 'muichiro', style: 'bottom-[30%] left-[16%]' },
  { src: Mitsuri, alt: 'mitsuri', style: 'top-[15%] right-[21%]' },
  { src: Gyomei, alt: 'gyomei', style: 'top-[18%] left-[12%]' },
  { src: Sanemi, alt: 'sanemi', style: 'top-[8%] right-[35%]' },
  { src: Shinobu, alt: 'shinobu', style: 'top-[8%] left-[33%]' },
];

function Intro1() {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.from({ length: 61 }, (_, i) => `/intro1/${i.toString().padStart(4, '0')}.webp`);
  const totalFrames = images.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentImageIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0.8]);
  const charScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1.5, 2]);
  const charOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const lbtextOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const effectOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.1, 0, 0]);

  const [showFinalText, setShowFinalText] = useState(false);

  // 이미지 프리로딩
  useEffect(() => {
    const preloadImages = [text, fog, effect, ...characters.map(c => c.src)];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4500); // 애니메이션 완료 후 활성화
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 1) {
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
    <section ref={containerRef} style={{ height: '300vh', position: 'relative', fontFamily: 'ChosunGs' }}>
      {/* 안개 효과 */}
      <motion.img
        id="fog"
        src={fog}
        alt="fog"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-auto object-contain z-[9998] opacity-10"
        transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
      />

      {/* 한자 */}
      <motion.img
        id="text"
        src={text}
        alt="text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-auto object-contain z-[9999]"
        transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
        style={{ opacity: textOpacity }}
      />

      {/* 캐릭터들 */}
      {characters.map((char, idx) => (
        <motion.div
          id="character"
          key={idx}
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
          className={`fixed ${char.alt === 'tanjiro' ? 'z-50' : 'z-40'} pointer-events-none ${char.style} translate-x-[-50%] translate-y-[-50%]`}
          ref={(el) => (charRefs.current[idx] = el)}
          style={{
            scale: charScale,
            opacity: charOpacity,
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
        className="fixed w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
        style={{ opacity: effectOpacity }}
      >
        <img src={effect} alt="effect" className="w-full h-auto object-contain" />
      </motion.div>

      {/* 좌측하단 텍스트 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
        style={{ opacity: lbtextOpacity }}
        className='fixed bottom-8 left-10 z-[10000] font-[16px] text-[#ffffff] flex flex-col'
      >
        <span>귀살대는 상처도 회복도 더딘 인간이지만,</span>
        <span>도깨비에 맞서 싸운다. 오직 인간을 지키기 위해.</span>
      </motion.div>

      {/* 마지막 스크롤 시 나타나는 텍스트 */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] text-[#ffffff] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showFinalText ? 0.8 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: showFinalText ? 1 : 0 }}
      >
        <h1 className='text-[60px] font-semibold mb-4 tracking-[0.2em]'>악귀멸살</h1>
        <span className='text-[24px] leading-[44px] tracking-widest'>
          그 숫자는 대략 수백 명.
          <br />
          정부로부터 정식으로 인정받지 못한 조직.
          <br />
          그러나 예로부터 존재해왔고,
          <br />
          오늘도 도깨비를 사냥한다,
        </span>
      </motion.div>

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
          zIndex: 10,
        }}
      />
    </section>
  );
}

export default Intro1;