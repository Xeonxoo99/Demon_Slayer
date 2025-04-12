// 캐릭터 확대 , 마지막 텍스트 넣기
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useTransform, motion } from 'framer-motion';

import text from '../images/intro1/el/메인한자 사각형.png'
import effect from '../images/intro1/el/효과.png'
import fog from '../images/intro1/el/안개.png'

import tanjiro from '../images/intro1/el/탄지로.png'
import Giyuu from '../images/intro1/el/기유.png'
import Shinobu from '../images/intro1/el/시노부.png'
import Sanemi from '../images/intro1/el/사네미.png'
import Muichiro from '../images/intro1/el/무이치로.png'
import Obanai from '../images/intro1/el/이구로.png'
import Mitsuri from '../images/intro1/el/미츠리.png'
import Gyomei from '../images/intro1/el/교메이.png'

gsap.registerPlugin(ScrollTrigger);

const characters = [
  { src: tanjiro, alt: 'tanjiro', style: 'top-[45%] left-[65%]' },
  { src: Giyuu, alt: 'giyuu', style: 'top-[70%] left-[18%]' },
  { src: Shinobu, alt: 'shinobu', style: 'top-[10%] left-[33%]' },
  { src: Sanemi, alt: 'sanemi', style: 'top-[8%] left-[60%]' },
  { src: Muichiro, alt: 'muichiro', style: 'top-[50%] left-[15%]' },
  { src: Obanai, alt: 'obanai', style: 'top-[35%] left-[75%]' },
  { src: Mitsuri, alt: 'mitsuri', style: 'top-[15%] left-[70%]' },
  { src: Gyomei, alt: 'gyomei', style: 'top-[18%] left-[12%]' },
];

function Intro1() {
  // bg
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const images = Array.from({ length: 61 }, (_, i) =>
    `/intro1/${i.toString().padStart(4, '0')}.webp`
  );

  // el
  const charRefs = useRef([]);
  const effectRef = useRef(null);
  const [imageSizes, setImageSizes] = useState(
    characters.map(() => ({ width: 0, height: 0 }))
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0]);

  // 마우스 좌표 (x, y)
  let x = 0.5; // 0 ~ 1 사이의 비율
  let y = 0.5;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const charSpeed = 0.010; // 이동 범위 절반으로 줄이기

    x = e.clientX / window.innerWidth;
    y = e.clientY / window.innerHeight;


    // charRefs.current 배열을 순회하며 각 캐릭터의 위치를 업데이트
    charRefs.current.forEach((charRef) => {
      if (charRef) {
        const speedX = (clientX - window.innerWidth / 2) * charSpeed;
        const speedY = (clientY - window.innerHeight / 2) * charSpeed;
        charRef.style.transform = `translate(${-speedX}px, ${-speedY}px)`;
      }
    });
  };

  // x, y 보간 속도 수정 (천천히 움직이게 하기)
  const mxList = characters.map(() => 0);
  const myList = characters.map(() => 0);

  const loop = () => {
    const speed = 0.09;

    charRefs.current.forEach((charRef, i) => {
      if (charRef) {
        const factor = 20 + i * 2;

        // 기준을 -0.5 ~ 0.5로 옮기기 (중앙 기준)
        const tx = (x - 0.5) * window.innerWidth;
        const ty = (y - 0.5) * window.innerHeight;

        mxList[i] += (tx - mxList[i]) * speed;
        myList[i] += (ty - myList[i]) * speed;

        charRef.style.transform = `translate(${mxList[i] / factor}px, ${myList[i] / factor}px)`;
      }
    });

    requestAnimationFrame(loop);
  };


  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSizes((prev) => {
      const newSizes = [...prev];
      newSizes[index] = { width: naturalWidth, height: naturalHeight };
      return newSizes;
    });
  };

  useGSAP(() => {
    const totalFrames = images.length;

    // 배경 이미지
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(progress * totalFrames)
          );

          if (imageRef.current) {
            imageRef.current.src = images[frameIndex];
          }

          gsap.to(imageRef.current, {
            opacity: progress >= 0.95 ? 0.8 : 1,
            duration: 0.2,
          });
        },
      },
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    loop(); // Start the loop for character and background movement

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
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
        style={{ scale, opacity }}
      />
      {/* 안개효과 */}

      <motion.img
              id="fog"
        src={fog}
        alt="fog"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-auto object-contain z-[9999] opacity-10"
        transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
        style={{ scale, opacity }}
      />


      {/* 캐릭터들 */}
      {characters.map((char, idx) => (
        <motion.div
          id="character"
          key={idx}
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
          className={`fixed ${char.alt === 'tanjiro' ? 'z-50' : 'z-40'
            } pointer-events-none ${char.style} translate-x-[-50%] translate-y-[-50%]`}
          ref={(el) => (charRefs.current[idx] = el)}
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

      {/* 바람효과 */}
      <div
        ref={effectRef}
        className="fixed w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
        style={{ opacity: 0.1 }}
      >
        <img
          src={effect}
          alt="effect"
          className="w-full h-auto object-contain"
        />
      </div>


      {/* 배경 이미지 */}
      <img ref={imageRef} src={images[0]} alt="" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 10 }} />
    </section>
  );
}

export default Intro1;
