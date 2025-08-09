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
  // opacity [0, 0.1, 0.25], [0, 1, 0] scale [0,  0.25], [1,  1.15]
  { src: tanjiro, alt: 'tanjiro', style: 'bottom-[-5%] right-[12%]', moveDistance: 100 },
  { src: Giyuu, alt: 'giyuu', style: 'bottom-[-3%] left-[17%]', moveDistance: 80 },
  { src: Obanai, alt: 'obanai', style: 'bottom-[40%] right-[18%]', moveDistance: 60 },
  { src: Muichiro, alt: 'muichiro', style: 'bottom-[30%] left-[16%]', moveDistance: 60 },
  { src: Mitsuri, alt: 'mitsuri', style: 'top-[15%] right-[21%]', moveDistance: 40 },
  { src: Gyomei, alt: 'gyomei', style: 'top-[18%] left-[12%]', moveDistance: 40 },
  { src: Sanemi, alt: 'sanemi', style: 'top-[8%] right-[35%]', moveDistance: 20 },
  { src: Shinobu, alt: 'shinobu', style: 'top-[8%] left-[33%]', moveDistance: 10 },
];


function MainIntro({ onAnimationComplete }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null); // 추가: 캔버스 참조
  const preloadedImagesRef = useRef([]); // 추가: 프리로드된 이미지 객체 저장
  const images = [];
  for (let i = 0; i < 61; i++) {
    const filename = String(i).padStart(4, '0');
    images.push(require(`../images/mainIntroWebp/${filename}.webp`));
  }
  const totalFrames = images.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentImageIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0.9]);

  // 한자 부분 스크롤 x 시 null 값으로 만들기
  const [isScrollReady, setIsScrollReady] = useState(false);

  const charScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 2, 3]);
  const charOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [0, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.7], [0.5, 0.65]);
  const leftTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const effectOpacity = useTransform(scrollYProgress, [0, 0.7], [0.1, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const finalTextOpacity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 0.8, 0]);

  const [showFinalText, setShowFinalText] = useState(false);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const opacityList = [
    useTransform(scrollYProgress, [0, 0.1, 0.72], [0, 1, 0]), // tanjiro
    useTransform(scrollYProgress, [0, 0.15, 0.76], [0, 1, 0]), // Giyuu
    useTransform(scrollYProgress, [0, 0.2, 0.80], [0, 1, 0]), // Obanai
    useTransform(scrollYProgress, [0, 0.25, 0.84], [0, 1, 0]), // Muichiro
    useTransform(scrollYProgress, [0, 0.3, 0.88], [0, 1, 0]), // Mitsuri
    useTransform(scrollYProgress, [0, 0.35, 0.92], [0, 1, 0]), // Gyomei
    useTransform(scrollYProgress, [0, 0.4, 0.96], [0, 1, 0]), // Sanemi
    useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 0]), // Shinobu
  ];

  const scaleList = [
    useTransform(scrollYProgress, [0, 0.1, 0.72], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.15, 0.76], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.2, 0.80], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.25, 0.84], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.3, 0.88], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.35, 0.92], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.4, 0.96], [1, 1, 1.5]),
    useTransform(scrollYProgress, [0, 0.45, 1], [1, 1, 1.5]),
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialAnimationDone(true);
      onAnimationComplete();
    }, 0);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

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

  // 이미지 프리로딩 개선
  useEffect(() => {
    const preloadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img); // 중요: 이미지 '객체'를 resolve
        img.onerror = () => {
          console.warn(`프리로딩 실패: ${src}`);
          reject(new Error(`Failed to load ${src}`));
        };
        img.src = src;
      });

    const preloadAll = async () => {
      const staticImages = [text, fog, effect, ...characters.map((c) => c.src)];
      const frameImageSrcs = images.map((img) => img.default ?? img);
      
      // 배경 시퀀스 이미지 프리로드 및 ref에 저장
      const loadedFrameImages = await Promise.all(frameImageSrcs.map(preloadImage));
      preloadedImagesRef.current = loadedFrameImages;

      // 나머지 정적 이미지 프리로드
      await Promise.all(staticImages.map(preloadImage));

      console.log('모든 이미지 프리로딩 완료');
      // 초기 프레임 그리기
      drawFrame(0);
    };

    preloadAll();
  }, []);

  // 캔버스에 프레임을 그리는 함수
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas || preloadedImagesRef.current.length === 0) return;
    const ctx = canvas.getContext('2d');
    const img = preloadedImagesRef.current[frameIndex];
    if (img) {
      // 캔버스를 꽉 채우도록 이미지를 그림 (object-fit: cover 효과)
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let sx, sy, sWidth, sHeight;

      if (canvasAspect > imgAspect) { // 캔버스가 이미지보다 넓을 때
        sWidth = img.width;
        sHeight = img.width / canvasAspect;
        sx = 0;
        sy = (img.height - sHeight) / 2;
      } else { // 캔버스가 이미지보다 높거나 같을 때
        sHeight = img.height;
        sWidth = img.height * canvasAspect;
        sy = 0;
        sx = (img.width - sWidth) / 2;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
    }
  };

  // 윈도우 크기 변경 시 캔버스 크기 조절
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // 리사이즈 후 현재 프레임 다시 그리기
      const currentFrame = Math.floor(currentImageIndex.get());
      drawFrame(currentFrame);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [currentImageIndex]);

  useEffect(() => {
    const unsubscribe = currentImageIndex.on('change', (latest) => {
      const newImageNumber = Math.floor(latest);
      requestAnimationFrame(() => drawFrame(newImageNumber));
    });
    return () => unsubscribe();
  }, [currentImageIndex]);

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

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (!isScrollReady && typeof v === 'number') {
        setIsScrollReady(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.section
      ref={containerRef}
      style={{
        height: '800vh',
        position: 'relative',
        fontFamily: 'ChosunGs',
        opacity: sectionOpacity,
        zIndex: 98
      }}
    >
      <motion.canvas
        ref={canvasRef}
        style={{
          opacity: bgOpacity,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
        }}
      />
      {characters.map((char, idx) => (
        <motion.div
          key={idx}
          className={`fixed ${char.alt === 'tanjiro' ? 'z-20' : 'z-10'} pointer-events-none ${char.style} translate-x-[-50%] translate-y-[-50%]`}
          ref={(el) => (charRefs.current[idx] = el)}
          style={{
            scale: scaleList[idx],
            opacity: opacityList[idx],
            x: isInitialAnimationDone && !showFinalText ? mousePos.x * char.moveDistance * randomDirections.current[idx].x : 0,
            y: isInitialAnimationDone && !showFinalText ? mousePos.y * char.moveDistance * randomDirections.current[idx].y : 0,
            transition: 'transform 1s ease-out',
          }}
        >
          <img
            src={char.src}
            alt={char.alt}
            className="object-contain"
            style={{              width: imageSizes[idx].width ? `${imageSizes[idx].width}px` : 'auto',
              height: imageSizes[idx].height ? `${imageSizes[idx].height}px` : 'auto',}}
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
      {isScrollReady && (
        <motion.img
          id="text"
          src={text}
          alt="text"
          className="fixed inset-0 w-full max-w-full h-full object-contain z-10"
          style={{
            opacity: scrollYProgress < 0.01 ? 0 : textOpacity,
            scale: textScale
          }}
          initial={{ opacity: 0 }}
        />
      )}

      {/* 좌측 하단 텍스트 */}
      <motion.div
        style={{
            opacity: scrollYProgress < 0.01 ? 0 : textOpacity,
          }}
          initial={{ opacity: 0 }}
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
        style={{ opacity: leftTextOpacity }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <img src={arrow} alt="arrow" />
      </motion.div>
    </motion.section>
  );
}

export default MainIntro;